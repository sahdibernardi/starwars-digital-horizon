import { useHistory } from "react-router-dom";

function Menu() {
    const history = useHistory();
    const redirectButton = ({ target }) => {
        const targetName = target.name;

        switch (targetName) {
            case ('button-home'):
                history.push('/')
                break;
            case ('button-planets'):
                history.push('/planets')
                break;
            case ('button-people'):
                history.push('/people')
                break;
            case ('button-starships'):
                history.push('/starships')
                break;
            default:
                break;
        }
    };

    return (
        <div className="menu">
            <h3>Functionality Menu</h3>
            <button className="menu-button" type="button" name="button-home" onClick={redirectButton}>
                Home
            </button>
            <button className="menu-button" type="button" name="button-planets" onClick={redirectButton}>
                Planets
            </button>
            <button className="menu-button" type="button" name="button-people" onClick={redirectButton}>
                People
            </button>
            <button className="menu-button" type="button" name="button-starships" onClick={redirectButton}>
                Starships
            </button>
        </div>
    );
  }
  
  export default Menu;