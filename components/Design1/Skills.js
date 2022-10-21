import styles from '../../styles/Design1/Skills.module.css'

export default function Skills({ skills }) {
    return (
        <section id={styles.skills} ref={skills}>
            <h2 className={styles.skillsSectionTitle}>SKILLS</h2>
            
        </section>
    )
}