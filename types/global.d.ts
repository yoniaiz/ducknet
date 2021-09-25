interface Image {
  url: string;
  name: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: Image;
  status?: 'inProgress' | 'completed' | 'saved';
}

interface User {
  username: string;
  email: string;
  password: string;
}

interface AuthUser extends User {
  projects: Project[];
  groups: User[];
}

interface FlatUserSession extends User {
  id: string;
  jwt: string;
}

interface UserSession {
  jwt: string;
  user: User & { id: string };
}
