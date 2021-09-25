import { gql } from '@apollo/client';

export const PROJECTS = gql`
  query getProjects {
    projects {
      id
      title
      description
      status
    }
  }
`;
