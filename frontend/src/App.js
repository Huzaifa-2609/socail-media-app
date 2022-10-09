import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";



function App() {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <Router>
      <Routes>
      <Route exact path="/" element={user?<Home/>:<Register/>}/>
      <Route exact path="/register" element={user?<Navigate to={"/"} replace/> : <Register/>}/>
      <Route exact path="/profile/:username" element={<Profile/>}/>
      <Route exact path="/login" element={user?<Navigate to={"/"}  replace/> :<Login/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
