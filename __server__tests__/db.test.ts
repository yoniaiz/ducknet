import User, { TestUserDoc } from '@utils/test-utils/user';
import { connectMongoDb, closeConnection, clearCollections } from '@lib/connectMongoDb';

beforeAll(async () => await connectMongoDb());
afterEach(async () => await clearCollections());
afterAll(async () => await closeConnection());

describe('Creating records', () => {
  it('saves a user', async () => {
    console.log('HERE');
    const user1 = new User({ name: 'user1' });

    const result = await user1.save();

    expect(result.isNew).toEqual(false);
  });
});

let user: TestUserDoc;

describe('Reading tests', () => {
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

describe('Delete', () => {
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

describe.only('update', () => {
  beforeEach(async () => {
    const user1 = new User({ name: 'user1', postCount: 0 });
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
    await User.updateMany({ name: 'user1' }, { $inc: { postCount: 1 } });

    const user1 = await User.findOne({ _id: user._id });
    expect(user1?.postCount).toEqual(1);
  });
});
