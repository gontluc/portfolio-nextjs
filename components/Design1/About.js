import styles from '../../styles/Design1/About.module.css'

export default function About({ about }) {

    return (
        <div id={styles.about} ref={about}>
            <h2 className={styles.aboutSectionTitle}>ABOUT</h2>
            
        </div>
    )
}