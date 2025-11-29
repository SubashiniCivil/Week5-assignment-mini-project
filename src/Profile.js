import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const Profile = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Welcome, {user?.name}</h2>

        <div className="profile-details">
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
        </div>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;


