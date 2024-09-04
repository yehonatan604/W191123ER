import { useSelector } from "react-redux";
import { TRootState } from "../../Store/BigPie";

const Home = () => {
  const user = useSelector(
    (state: TRootState) => state.UserSlice,
  );


  return (
    <div className="flex flex-col items-center justify-start gap-2">
      <h1 className="text-2xl">Home Page</h1>
      <p className="text-lg">Welcome Home!</p>
      {user.isLoggedIn && <p className="text-lg">User Is Logged IN!!!!!!!!</p>}
    </div>
  );
};

export default Home;
