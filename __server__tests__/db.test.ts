import User, { TestUserDoc } from '@utils/test-utils/user';
import { connectToDb, disconnectDb, clearCollections } from '@lib/connectMongoDb';
import Project, { ProjectDoc } from '@utils/test-utils/project';
import Comment, { CommentDoc } from '@utils/test-utils/comment';

beforeAll(async () => await connectToDb());
afterEach(async () => await clearCollections());
afterAll(async () => await disconnectDb());

describe.skip('Creating records', () => {
  it('saves a user', async () => {
    const user1 = new User({ name: 'user1' });

    const result = await user1.save();
    expect(result.isNew).toEqual(false);
  });
});

let user: TestUserDoc;

describe.skip('Reading tests', () => {
  beforeEach(async () => {
    const user1 = new User({ name: 'user1' });
    user = await user1.save();
  });

  it('read user 1', async () => {
    const user1 = await User.findOne({ _id: user._id });
    expect(user1).not.toBeNull();
  });

  it('read user', async () => {
    const users = await User.find({ name: 'user1' });
    expect(users).toHaveLength(1);
  });
});

describe.skip('Delete', () => {
  beforeEach(async () => {
    const user1 = new User({ name: 'user1' });
    user = await user1.save();
  });

  it('delete user 1', async () => {
    const result = await user.remove();
    expect(result).not.toBeNull();

    const user1 = await User.findOne({ _id: user._id });
    expect(user1).toBeNull();
  });

  it('delete user 1 by model', async () => {
    const result = await User.findOneAndRemove({ _id: user._id });
    expect(result).not.toBeNull();

    const user1 = await User.findOne({ _id: user._id });
    expect(user1).toBeNull();
  });

  it('delete user 1 by model by id', async () => {
    const result = await User.findByIdAndRemove(user._id);
    expect(result).not.toBeNull();

    const user1 = await User.findOne({ _id: user._id });
    expect(user1).toBeNull();
  });
});

describe.skip('update', () => {
  beforeEach(async () => {
    const user1 = new User({ name: 'user1', likes: 0 });
    user = await user1.save();
  });

  it('update user 1', async () => {
    const updatedUser = await user.set('name', 'user2');
    const newUser = await updatedUser.save();
    expect(newUser).not.toBeNull();

    const user1 = await User.findOne({ _id: user._id });
    expect(user1?.name).toEqual('user2');
  });

  it('update user 1', async () => {
    const result = await user.updateOne({ name: 'user2' });
    expect(result).not.toBeNull();

    const user1 = await User.findOne({ _id: user._id });
    expect(user1?.name).toEqual('user2');
  });

  it('increment by one', async () => {
    await User.updateMany({ name: 'user1' }, { $inc: { likes: 1 } });

    const user1 = await User.findOne({ _id: user._id });
    expect(user1?.likes).toEqual(1);
  });
});

describe.skip('sub docs', () => {
  it('add sub doc', async () => {
    const user1 = new User({ name: 'user1', posts: [{ title: 'post 1' }] });
    await user1.save();

    const createdUser = await User.findOne({ _id: user1._id });
    expect(createdUser?.posts[0]?.title).toEqual('post 1');
  });

  it('add sub doc to existing user', async () => {
    const user1 = new User({ name: 'user1', posts: [{ title: 'post 1' }] });
    await user1.save();

    const createdUser = await User.findOne({ _id: user1._id });

    if (createdUser) {
      createdUser.posts.push({ title: 'post 2' });
      await createdUser.save();
    }

    const updatedUser = await User.findOne({ _id: user1._id });
    expect(updatedUser?.postCount).toEqual(2);
  });

  it('remove sub doc to existing user', async () => {
    const user1 = new User({ name: 'user1', posts: [{ title: 'post 1' }] });
    await user1.save();

    const createdUser = await User.findOne({ _id: user1._id });

    if (createdUser && createdUser.posts?.[0]?.remove) {
      createdUser.posts[0].remove();
      await createdUser.save();
    }

    const updatedUser = await User.findOne({ _id: user1._id });
    expect(updatedUser?.postCount).toEqual(0);
  });
});

let project: ProjectDoc;

describe.skip('test associations', () => {
  let comment: CommentDoc;

  beforeEach(async () => {
    project = new Project({ title: 'project title', content: 'this is the content' });
    user = new User({ name: 'User1', projects: [project._id] });
    comment = new Comment({ content: 'comment content', user: user._id });

    comment.user = user;

    if (project.comments && comment) {
      project.comments = comment._id;
    }

    await Promise.all([user.save(), project.save(), comment.save()]);
  });

  it('user has project', async () => {
    const createdUser = await User.findOne({ _id: user._id });
    const userProjectId = Array.isArray(createdUser?.projects) ? createdUser?.projects[0]?._id : '';
    const project = await Project.findOne({ _id: userProjectId });

    if (createdUser) {
      const comment = await Comment.findOne({ user: createdUser });
      expect(comment?.content).toMatchInlineSnapshot(`"comment content"`);
    }

    expect(project?.title).toMatchInlineSnapshot(`"project title"`);
  });

  it('get user projects', async () => {
    const createdProjects = await User.findOne({ _id: user._id }).populate('projects');
    const firstProject = Array.isArray(createdProjects?.projects)
      ? createdProjects?.projects[0]
      : null;

    expect(firstProject?.title).toMatchInlineSnapshot(`"project title"`);
  });

  it('get user projects messages', async () => {
    const createdProjectsComments = await User.findOne({ _id: user._id }).populate({
      path: 'projects',
      populate: {
        path: 'comments',
        model: 'comment',
        populate: {
          path: 'user',
          model: 'user',
        },
      },
    });

    // @ts-expect-error
    expect(createdProjectsComments?.projects[0]?.comments[0]?.content).toMatchInlineSnapshot(
      `"comment content"`
    );
  });
});

describe.skip('middleware test', () => {
  beforeEach(async () => {
    project = new Project({ title: 'project title', content: 'this is the content' });
    user = new User({ name: 'User1', projects: [project._id] });

    await Promise.all([user.save(), project.save()]);
  });

  it('on remove user delete projects', async () => {
    const preProjectsCount = await Project.count();
    await user.remove();
    const postProjectsCount = await Project.count();

    expect(preProjectsCount).toEqual(1);
    expect(postProjectsCount).toEqual(0);
  });
});

describe.skip('pagination', () => {
  beforeEach(async () => {
    const createUserPromises = Array.from({ length: 4 }, (_, i) =>
      new User({ name: `user ${i + 1}` }).save()
    );
    await Promise.all(createUserPromises);
  });
  it('get all users', async () => {
    const [user3, user4] = await User.find().sort({ name: 1 }).skip(2).limit(2);
    expect(user3.name).toMatchInlineSnapshot(`"user 3"`);
    expect(user4.name).toMatchInlineSnapshot(`"user 4"`);
  });
});
