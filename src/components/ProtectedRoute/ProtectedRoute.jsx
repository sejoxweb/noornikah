import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children, currentUser }) => {
  console.log("iam from protected route", currentUser);
  if (!currentUser.id) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
