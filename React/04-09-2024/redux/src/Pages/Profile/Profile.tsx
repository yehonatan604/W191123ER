/* eslint-disable tailwindcss/classnames-order */
import { useSelector } from "react-redux";
import { TRootState } from "../../Store/BigPie";

const Profile = () => {
  const user = useSelector((state: TRootState) => state.UserSlice);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen gap-2">
      <h1 className="text-2xl">Profile Page</h1>
      <p className="text-lg dark:text-white">
        Welcome {user.user?.name.first + " " + user.user?.name.last}
      </p>
    </div>
  );
};

export default Profile;
