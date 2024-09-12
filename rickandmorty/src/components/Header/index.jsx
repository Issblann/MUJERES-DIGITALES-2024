import { Link } from 'react-router-dom';
import './index.css';
export const Header = () => {
    return (
        <header className="Header">
            <h1 className="Header-Title">Galería de Imágenes</h1>
            <nav className="Header-Nav">
                <li className='Header-Nav-li'>
                    <Link className='Header-Nav-a' to="/">Home</Link>
                </li>
                <li className='Header-Nav-li'>
                    <Link className='Header-Nav-a' to="/Womens">Mujeres</Link>
                </li>
                <li className='Header-Nav-li'>
                    <Link className='Header-Nav-a' to="/Mens">Hombres</Link>
                </li>

            </nav>
        </header>
    )
}