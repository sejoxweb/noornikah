import { useEffect, useState } from "react";
import "./App.css";
import Login from "./pages/Login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:3004/users");
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <BrowserRouter>
        {currentUser.id && <Navigation />}
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <Profile currentUser={currentUser} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <Login users={users} onLogin={(user) => setCurrentUser(user)} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
