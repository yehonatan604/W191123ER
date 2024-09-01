import { Navigate } from "react-router-dom";

type ProfileProps = {
  isLoggedIn: boolean;
};

const Profile = (props: ProfileProps) => {
  return props.isLoggedIn ? (
    <div className="flex flex-col items-center justify-start min-h-screen gap-2">
      <h1 className="text-2xl">Profile Page</h1>
      <p className="text-lg dark:text-white">Welcome User!</p>
    </div>
  ) : (
    <Navigate to={"/signin"} />
  );
};

export default Profile;
