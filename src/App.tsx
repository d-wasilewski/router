import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { User } from "./components/User";
import Users from "./components/Users";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />}>
            <Route path=":userId" element={<User />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export const Home = () => {
  return <div>You are in Home page, hello</div>;
};
export const About = () => {
  return <div>This is the page where you put details about yourself</div>;
};
export const NotFound = () => {
  return <div>This is a 404 page</div>;
};

export default App;
