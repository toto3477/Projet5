import { NavLink } from 'react-router-dom';
import logo from '../assets/images/kasa.png';
import "../assets/style/Header.scss";


function Header() {
  return (
    <div className="Header">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='App-link'>
          <ul>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>      
            <li>Accueil</li>
            </NavLink>   
            <NavLink to="/Apropos" className={({ isActive }) => (isActive ? 'active' : '')}>
            <li>A propos</li>
            </NavLink>   
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;