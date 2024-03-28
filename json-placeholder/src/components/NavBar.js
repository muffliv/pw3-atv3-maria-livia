import { Outlet, Link } from "react-router-dom";
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to='/' className={styles.link}>Listing</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/create' className={styles.link}>Create</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/getting' className={styles.link}>Getting</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/updating' className={styles.link}>Updating</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/delete' className={styles.link}>Delete</Link>
                </li>
            </ul>

            <Outlet />
        </>
    );
}