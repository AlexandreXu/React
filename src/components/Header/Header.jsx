import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <img src="path_to_your_logo" alt="Logo" />
            </div>
            <div>
                <a href="#accueil">Accueil</a>
                <a href="#a-propos">A propos</a>
            </div>
        </header>
    );
}

export default Header;
