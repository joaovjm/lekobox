import { Link } from 'react-router'
import './Header.css'

const Header = () => {
    return (
        
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/clientes">Clientes</Link>
                    <Link to="/chaves">Chaves</Link>
                </nav>
            </header>

    )
}

export default Header