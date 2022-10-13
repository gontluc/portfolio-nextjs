import styles from '../../styles/Design1/Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <ul className={styles.navbar}>
                <li>PROJECTS</li>
                <li>SKILLS</li>
                <li>ABOUT</li>
            </ul>
        </header>
    )
}