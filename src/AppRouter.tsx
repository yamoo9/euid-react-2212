import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { Container } from "./components/Container/Container";

export default function AppRouter(): JSX.Element {
  return (
    <Router>
      <AppHeader />
      <Container>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user" element={<UserDetail />} />
        </Routes>
      </Container>
    </Router>
  );
}
