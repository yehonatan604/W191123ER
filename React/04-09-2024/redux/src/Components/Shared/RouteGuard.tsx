import { Navigate } from "react-router-dom";
import { TUser } from "../../Types/TUser";

type TRouteGuardProps = {
  children: React.ReactNode;
  user: TUser;
};

const RouteGuard = (props: TRouteGuardProps) => {
  return props.user ? <>{props.children}</> : <Navigate to={"/"} />;
};

export default RouteGuard;
