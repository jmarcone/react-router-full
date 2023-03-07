import { NavLink, Route, Routes } from "react-router-dom";
import Instructions from "./components/Instructions";
import Students from "./components/Students.js";
import StudentDetails from "./components/StudentDetails";
import "./styles.scss";

const App = () => {
  return (
    <div className="App">
      <nav className="nav-bar">
        <NavLink className="link" end to="/students"  >
          Students
        </NavLink>
      </nav>
      <div className="Instructions">
        
        <Instructions />
      </div>
      <div className="block">
        <Routes>
          <Route path="/students" element={<Students />} />
          <Route path="/student/:uuid" element={<StudentDetails />}/>
        </Routes>

      </div>
    </div>
  );
};

export default App;
