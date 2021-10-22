import { useRouter } from 'next/router';
import FindProjectFilters from '../components/FindProjectFilters/FindProjectFilters';

export type Route = {
  route: string | ((id: string) => string);
  title: string;
  isSelected?: boolean;
  sideBarElement?: JSX.Element;
  href?: string;
};

type PathRoutes = Route[];

type SideBarItemsLinks = Record<string, PathRoutes>;

const projects: PathRoutes = [
  {
    route: '/projects',
    title: 'my projects',
  },
  {
    route: '/projects/find-projects',
    title: 'find projects',
    sideBarElement: <FindProjectFilters />,
  },
  {
    route: '/projects/saved',
    title: 'saved projects',
  },
  {
    route: '/projects/completed',
    title: 'completed projects',
  },
];

const projectsId: PathRoutes = [
  { route: (id: string) => `/projects/${id}`, title: 'project' },
  { route: (id: string) => `/projects/${id}/get-started`, title: 'Get started' },
  { route: (id: string) => `/projects/${id}/reviews`, title: 'Reviews' },
  { route: (id: string) => `/projects/${id}/solutions`, title: 'Solutions' },
];

const sidebarItemsLinks: SideBarItemsLinks = {
  projects,
  'projects[id]': projectsId,
};

type MainRouteKeys = keyof typeof sidebarItemsLinks;

const ID_REGEX = /^\[.+\]$/;

export const useGetSideBarItems = () => {
  const { pathname, asPath } = useRouter();

  const [, mainRoute, id] = pathname.split('/');
  const itemsKey = (ID_REGEX.test(id) ? `${mainRoute}${id}` : mainRoute) as MainRouteKeys;

  const routeItemsLinks = sidebarItemsLinks[itemsKey] || [];

  const [, , uniqueId] = asPath.split('/');

  let Element: JSX.Element | null = null;

  routeItemsLinks.forEach((link, idx) => {
    const href = typeof link.route === 'function' ? link.route(uniqueId) : link.route;
    const isSelected = href === asPath;
    routeItemsLinks[idx].isSelected = isSelected;
    routeItemsLinks[idx].href = href;

    if (isSelected) {
      Element = link.sideBarElement || null;
    }
  });

  return { links: routeItemsLinks, Element };
};
