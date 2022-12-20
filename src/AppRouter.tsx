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
          <Route
            path="/"
            element={
              <div
                children={
                  <h1 className="text-4xl mt-4">안녕!! 리액트 라우터~</h1>
                }
              />
            }
          />
          <Route path="/users">
            <Route index element={<UserList />} />
            <Route path=":userId" element={<UserDetail />} />
          </Route>
        </Routes>
      </Container>
    </Router>
  );
}
