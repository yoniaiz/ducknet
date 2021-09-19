import { gql } from '@apollo/client';

export const GET_PROJECTS_IDS = gql`
  query getProjectIds {
    me {
      projects {
        title
        description
        id
      }
    }
  }
`;

export const GET_GROUP_IDS = gql`
  query getGroupIds {
    me {
      groups
    }
  }
`;

export const GET_MENTORS_IDS = gql`
  query getMentorIds {
    me {
      mentors
    }
  }
`;
