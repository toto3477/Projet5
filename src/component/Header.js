import { NavLink } from 'react-router-dom';
import logo from '../assets/images/kasa.png';


function Header() {
  return (
    <div className="Header">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='App-link'>
          <ul>
            <NavLink exact to="/" activeClassName="active">      
            <li>Accueil</li>
            </NavLink>   
            <NavLink to="/Apropos" activeClassName="active">
            <li>A propos</li>
            </NavLink>   
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;