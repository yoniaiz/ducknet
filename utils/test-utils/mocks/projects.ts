import * as faker from 'faker';

const generateProject = (): Projects => ({
  id: faker.datatype.uuid(),
  _id: faker.datatype.uuid(),
  title: faker.name.title(),
  description: faker.commerce.productDescription(),
  __typename: 'Projects',
  published_at: faker.datatype.datetime(),
  updatedAt: faker.datatype.datetime(),
  createdAt: faker.datatype.datetime(),
  technologies: [],
  image: null,
});

export const projects = Array.from({ length: 5 }, () => generateProject());
