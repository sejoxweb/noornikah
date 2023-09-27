import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex flex-row space-x-4">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default Navigation;
