import { gql } from '@apollo/client/core';

export const PROJECTS = gql`
  query getProjects {
    projects {
      id
      title
      description
      published_at
      technologies {
        title
        image {
          url
        }
      }
      image {
        url
      }
    }
  }
`;

export const PROJECTS_WITH_LIMIT = gql`
  query getProjectsWithLimit($limit: Int) {
    projects(limit: $limit) {
      id
      title
      description
    }
  }
`;

export const PROJECTS_IDS_WITH_LIMIT = gql`
  query getProjectIdsWithLimit($limit: Int) {
    projects(limit: $limit) {
      id
    }
  }
`;

export const PROJECT_BY_ID = gql`
  query project($id: ID!) {
    project(id: $id) {
      id
      title
      description
    }
  }
`;
