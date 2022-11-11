import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home/Home";
import Register from "./pages/register";
import LoggedinRoutes from "./routes/LoggedinRoutes";
import NotLoginInRoutes from "./routes/NotLoginInRoutes";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<LoggedinRoutes />}>
          <Route path="/" element={<Home />} exact />
          <Route path="/profile" element={<Profile />} exact />
        </Route>
        <Route element={<NotLoginInRoutes />}>
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
