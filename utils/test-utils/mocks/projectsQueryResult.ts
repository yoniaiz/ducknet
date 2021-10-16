import { PROJECTS } from '@queries/projects';
import { projects as mockedProjects } from './projects';

export const projectsQueryResult = (projects = mockedProjects) => ({
  request: { query: PROJECTS },
  result: {
    data: {
      projects,
    },
  },
});
