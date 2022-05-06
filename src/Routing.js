import { BrowserRouter as Router, Route } from "react-router-dom";
import Education from "./components/educationDetails/Education";
import Experience from "./components/experienceDetails/Experience";
import Extra from "./components/extraDetails/Extra";
import Navbar from "./components/navBar/Navbar";
import Personal from "./components/personalDetails/Personal";
import Project from "./components/projectDetails/Project";
const routing = (
  <Router>
    <Navbar />
    <div>
      <Route exact path="/" component={Personal}></Route>
      <Route exact path="/educationdetails" component={Education}></Route>
      <Route exact path="/projectdetails" component={Project}></Route>
      <Route exact path="/experiencedetails" component={Experience}></Route>
      <Route exact path="/extradetails" component={Extra}></Route>
    </div>
  </Router>
);
export default routing;
