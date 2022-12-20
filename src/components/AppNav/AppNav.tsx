import { AppLink } from "../AppLink/AppLink";

export function AppNav() {
  return (
    <nav className="AppNavigation">
      <ul className="flex gap-2">
        <li>
          <AppLink to="/">User List</AppLink>
        </li>
        <li>
          <AppLink to="/user">User</AppLink>
        </li>
      </ul>
    </nav>
  );
}
