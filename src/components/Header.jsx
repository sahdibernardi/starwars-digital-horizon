import logo from '../media/Star_Wars_Logo.png'
import song from '../media/Theme.mp3'
import Menu from "./Menu";

function Header() {
    return (
        <div>
            <div className="logo-div">
            <img src={ logo } alt="star wars logo" id="logo"/>
            </div>
            <div className="audio-div">
            <audio src={ song } type="audio/mp3" controls id="audio-file">
                </audio>
            </div>
            <Menu />
        </div>
    );
  }
  
  export default Header;