import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>&copy;</Navbar.Brand>
      <Link to="/About">About</Link>
    </Navbar>
  );
}

export default Footer;
