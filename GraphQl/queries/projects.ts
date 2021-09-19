import { gql } from '@apollo/client';

export const LOAD_PROJECTS = gql`
  query getProjects {
    projects {
      title
      description
    }
  }
`;
