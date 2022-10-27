import { useEffect, useRef } from 'react'

import styles from '../../styles/Design1/About.module.css'

export default function About({ about }) {

    const img1About = useRef(null)
    const img2About = useRef(null)
    const text1About = useRef(null)
    const text2About = useRef(null)

    useEffect(() => {

        // Animations trigger on view scroll
        window.addEventListener('scroll', () => {

            const windowHeight = window.innerHeight;
            const elementVisible = 200;

            // Img 1 about section
            const img1Top = img1About.current.getBoundingClientRect().top;

            // If img1About is inside
            if (img1Top < windowHeight - elementVisible) {

                /* Change style properties */
                img1About.current.style.top = '0';
                img1About.current.style.right = '0';
                img1About.current.style.opacity = '1';
            }

            // Img 2 about section
            const img2Top = img2About.current.getBoundingClientRect().top;

            // If img2About is inside
            if (img2Top < windowHeight - elementVisible) {

                /* Change style properties */
                img2About.current.style.bottom = '0';
                img2About.current.style.left = '0';
                img2About.current.style.opacity = '1';
            }

            // Text 1 about section
            const text1Top = text1About.current.getBoundingClientRect().top;

            // If text1About is inside
            if (text1Top < windowHeight - elementVisible) {

                /* Change style properties */
                text1About.current.style.opacity = '1';
            }

            // Text 2 about section
            const text2Top = text2About.current.getBoundingClientRect().top;

            // If text1About is inside
            if (text2Top < windowHeight - elementVisible) {

                /* Change style properties */
                text2About.current.style.opacity = '1';
            }
        })
    }, [])

    return (
        <div id={styles.about} ref={about}>
            <h2 className={styles.aboutSectionTitle}>ABOUT</h2>

            <div className={styles.aboutSquare} ref={text1About}>
                <p>
                    I am a self-taught, motivated and hardworking frontend developer who is passionate about building impressive websites and efficient web applications!
                    I am able to adapt very quickly and I am always learning new technologies.
                </p>
            </div>

            <div className={styles.aboutSquare} ref={img1About}>
                <img src="/images/about1.jpg" alt="code in computer" />
            </div>
            
            <div className={styles.aboutSquare} ref={text2About}>
                <p>
                    I come from an aerospace engineering background, but decided to pursue a coding career instead. For me, code is innovation, creativity and a very powerful tool.
                </p>
            </div>

            <div className={styles.aboutSquare} ref={img2About}>
                <img src="/images/about2.jpg" alt="plane" />
            </div>
        </div>
    )
}