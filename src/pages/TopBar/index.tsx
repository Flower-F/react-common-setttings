import { memo, useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { NavBar, TopbarContainer } from "./style";

const TopBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/home");
    }
  }, [pathname, navigate]);

  return (
    <TopbarContainer>
      <div>TopBar</div>
      <NavBar>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "selected" : "unselected")}
        >
          Home Page
        </NavLink>
        <NavLink
          to="/redux"
          className={({ isActive }) => (isActive ? "selected" : "unselected")}
        >
          Redux Example
        </NavLink>
        <NavLink
          to="/request"
          className={({ isActive }) => (isActive ? "selected" : "unselected")}
        >
          Request Example
        </NavLink>
      </NavBar>
      <Outlet />
    </TopbarContainer>
  );
};

export default memo(TopBar);
