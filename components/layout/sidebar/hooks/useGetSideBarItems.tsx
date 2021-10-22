import { useRouter } from 'next/router';

export type Route = {
  route: string | ((id: string) => string);
  title: string;
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

const sidebarItemsLinks: SideBarItemsLinks = {
  projects,
  'projects[id]': [{ route: (id: string) => `/projects/${id}`, title: 'project' }],
};

type MainRouteKeys = keyof typeof sidebarItemsLinks;
type SideBarItemsElements = Record<Partial<MainRouteKeys>, JSX.Element[]>;

const sidebarItemsElements: SideBarItemsElements = {
  projects: [<div key="hi">hi</div>],
};

const ID_REGEX = /^\[.+\]$/;

export const useGetSideBarItems = () => {
  const { pathname } = useRouter();

  const [, mainRoute, id] = pathname.split('/');
  const itemsKey = (ID_REGEX.test(id) ? `${mainRoute}${id}` : mainRoute) as MainRouteKeys;

  const routeItemsLinks = sidebarItemsLinks[itemsKey] || [];
  const routeItemsElements = sidebarItemsElements[itemsKey] || [];

  return { elements: routeItemsElements, links: routeItemsLinks };
};
