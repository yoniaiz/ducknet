import { gql } from '@apollo/client';

export const ME = gql`
  query me {
    me {
      username
      projects {
        id
        title
      }
    }
  }
`;

export const PROJECTS_IN_PROGRESS = gql`
  query projectsInProgress {
    userProjectsByStatus(status: "inProgress") {
      id
      description
      title
      status
    }
  }
`;

export const PROJECTS_COMPETED = gql`
  query projectsCompleted {
    userProjectsByStatus(status: "completed") {
      id
      description
      title
      status
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
