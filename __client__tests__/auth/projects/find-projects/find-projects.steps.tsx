import { loadFeature, defineFeature } from 'jest-cucumber';
import { renderWithApolloProvider } from '@utils/test-utils/customRender';
import FindProjects from '@pages/projects/find-projects';
import { screen, waitFor } from '@testing-library/dom';
import { projectsQueryResult } from '@utils/test-utils/mocks/projectsQueryResult';
import { projects } from '@utils/test-utils/mocks/projects';
import { routes } from '@constants/routes';

const feature = loadFeature('features/find-projects.feature');

defineFeature(feature, (test) => {
  const mockSteps = [[], [projectsQueryResult()], [projectsQueryResult([projects[0]])]];

  beforeEach(() => {
    renderWithApolloProvider(<FindProjects />, {
      mocks: mockSteps.shift(),
    });
  });

  test('Should show 3 skeleton loaders when projects not available', ({ given, then, when }) => {
    given('projects not available', () => {
      expect(screen.queryByRole('card')).toBeNull();
    });

    then(/^(\d+) skeleton loaders displayed on screen$/, (skeletonsNum: string) => {
      expect(screen.getAllByText(/skeleton/i)).toHaveLength(Number(skeletonsNum));
    });

    when('loading done', async () => {
      await waitFor(() => {
        expect(screen.queryByText(/skeleton/i)).toBeNull();
      });
    });

    then('projects not available alert', () => {
      expect(screen.getByText(/No available projects/i)).toBeInTheDocument();
    });
  });

  test('Viewing all available projects', ({ given, then }) => {
    given('Unauthorized user enters the page', async () => {
      const roleCheckbox = await screen.findByLabelText(/role/i);
      expect(roleCheckbox).not.toBeChecked();
    });

    then('User views all available project without filters', () => {
      expect(screen.getAllByRole('card').length).toBeGreaterThan(0);
    });
  });

  test('Clicking on project should navigate to projects page', ({ given, then }) => {
    given('Projects available on screen', async () => {
      await waitFor(() => {
        expect(screen.getAllByRole('card').length).toBeGreaterThan(0);
      });
    });

    then('Project should have link to the project page', () => {
      expect(screen.getByTestId(`link--${projects[0].title}`)).toHaveAttribute(
        'href',
        `${routes.projects}/${projects[0].id}`
      );
    });
  });
});
