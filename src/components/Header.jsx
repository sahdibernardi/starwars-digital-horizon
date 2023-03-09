import logo from '../images/Star_Wars_Logo.png'
import Menu from "./Menu";

function Header() {
    return (
        <div>
            <div className="logo-div">
            <img src={ logo } alt="star wars logo" id="logo"/>
            </div>
            <Menu />
        </div>
    );
  }
  
  export default Header;