import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <img src="./EmplacementDuLogo" alt="Logo" />
            </div>
            <div>
                <Link to="/home">Accueil</Link>
                <Link to="/about">A propos</Link>
            </div>
        </header>
    );
}

export default Header;
