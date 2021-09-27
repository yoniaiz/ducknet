import { gql } from '@apollo/client';

export const ME = gql`
  query Me {
    me {
      username
      projectsInProgress {
        project {
          title
        }
        started
        progress
      }
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

export const PROJECTS_SAVED = gql`
  query projectsSaved {
    userProjectsByStatus(status: "saved") {
      id
      description
      title
      status
    }
  }
`;

// export const PROJECTS_IN_PROGRESS_V2 = gql`
//   query projectsInProgressV2 {
//     me {
//       projects {
//         title
//         description
//         id
//       }
//     }
//   }
// `;

// export const GET_GROUP_IDS = gql`
//   query getGroupIds {
//     me {
//       groups
//     }
//   }
// `;

// export const GET_MENTORS_IDS = gql`
//   query getMentorIds {
//     me {
//       mentors
//     }
//   }
// `;
