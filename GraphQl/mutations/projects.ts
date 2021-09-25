import { gql } from '@apollo/client';

export const UPDATE_PROJECT = gql`
  mutation UpdateProject($updateProjectInput: updateProjectInput) {
    updateProject(input: $updateProjectInput) {
      project {
        id
        title
        description
      }
    }
  }
`;
