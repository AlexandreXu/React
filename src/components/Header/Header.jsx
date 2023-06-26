import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from "../../assets/icons/Logo";

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <Logo/>
            </div>
            <div>
                <Link to="/home">Accueil</Link>
                <Link to="/about">A propos</Link>
            </div>
        </header>
    );
}

export default Header;
