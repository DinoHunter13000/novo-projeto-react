import { Outlet } from "react-router-dom";
import ResponsiveDrawer from "./drawer";

const Root = () => {
  return (
    <>
    <ResponsiveDrawer><Outlet /></ResponsiveDrawer>
    </>
  );
};

export default Root;