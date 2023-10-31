import React, { useContext } from "react";
import PageHeader from "../Components/PageHeader";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router";

const Profile = () => {
  const { user, logOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <PageHeader title="Profile" />
      <div className="py-20">
        {user && (
          <div className="space-y-4">
            <img src={user.photoURL} alt={user.displayName} />
            <p>Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
            <button onClick={handleLogout} className="btn btn-primary">
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
