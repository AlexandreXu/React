import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from "../../assets/icons/Logo";

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <Link to="/"><Logo/></Link>
            </div>
            <div>
                <Link className={styles.link} to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </div>
        </header>
    );
}

export default Header;
