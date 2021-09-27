import { gql } from '@apollo/client';

export const ME = gql`
  query Me {
    me {
      username
      email
      id
    }
  }
`;

export const PROJECTS_IN_PROGRESS = gql`
  query ProjectInProgress {
    me {
      projectsInProgress {
        project {
          id
          title
          description
        }
        started
        progress
      }
    }
  }
`;

export const COMPLETED_PROJECTS = gql`
  query CompletedProjects {
    me {
      completedProjects {
        project {
          id
          title
          description
        }
        completedOn
      }
    }
  }
`;

export const SAVED_PROJECTS = gql`
  query SavedProjects {
    me {
      savedProjects {
        project {
          id
          title
          description
        }
      }
    }
  }
`;
