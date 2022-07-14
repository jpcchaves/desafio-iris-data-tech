import * as Styled from "./style";
// Logo
import Logo from "../../assets/logo.svg";
// React Router
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav_wrapper">
      <Styled.Navbar>
        <div className="img_wrapper">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="links_list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Pages</Link>
            </li>
            <li>
              <Link to="/">Classes</Link>
            </li>
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/">Blogs</Link>
            </li>
            <li>
              <Link to="/">Shops</Link>
            </li>
          </ul>
        </div>
        <div className="button">
          <Link to="/">MEMBERSHIP</Link>
        </div>
      </Styled.Navbar>
    </div>
  );
};

export default Navbar;
