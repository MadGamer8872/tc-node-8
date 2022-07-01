import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { FilmsView } from "./views/FilmView";

const New = () => (
  <main>
    <h1>New Film</h1>
  </main>
);

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to={"films"}
            >
              Films
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="films" element={<FilmsView />} />
        <Route path="new" element={<New />} />
      </Routes>
    </Router>
  );
};

export default App;
