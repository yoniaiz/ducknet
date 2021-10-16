interface Image {
  url: string;
  name: string;
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
