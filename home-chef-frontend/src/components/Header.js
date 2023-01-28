import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./login/LoginButton";
import LogoutButton from "./login/LogoutButton";

function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>HomeChef</Navbar.Brand>
      <Link to="/getAPIData">Kitchen API</Link>
      <Link to="/myKitchen">My Kitchen</Link>
      <Link to="/profile">Profile</Link>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Navbar>
  );
}

export default Header;
