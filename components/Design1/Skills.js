import { useEffect, useRef } from 'react'

import styles from '../../styles/Design1/Skills.module.css'

export default function Skills({ skills }) {

    const otherTechImgs = useRef([])

    useEffect(() => {

        // Animations (Other Technologies Imgs) trigger on view scroll
        window.addEventListener('scroll', () => {

            otherTechImgs.current.forEach((img, index) => {
                const windowHeight = window.innerHeight;
                const elementTop = img.getBoundingClientRect().top;
                const elementVisible = 100;

                // If it is inside
                if (elementTop < windowHeight - elementVisible & img.children[0].style.transform !== 'rotate3d(0, 0, 0, 0deg)') {

                    /* Change style properties of blue square */
                    img.style.transform = 'rotate3d(0, 1, 0, 90deg)';
                    img.style.transitionDelay = `${index * 0.2}s`

                    /* Change style properties of imgs */
                    setTimeout(() => {
                        img.style.transform = 'rotate3d(0, 0, 0, 0deg)';
                        img.style.backgroundColor = 'transparent'

                        img.children[0].style.transform = 'rotate3d(0, 0, 0, 0deg)';
                    }, 1000 + index * 200)
                }
            })
        })
    }, [])

    return (
        <section id={styles.skills} ref={skills}>
            <div className={styles.skillsBackground}></div>

            <h2 className={styles.skillsSectionTitle}>SKILLS</h2>
            
            <h3 className={styles.secondaryTitle}>MAIN TECHNOLOGIES</h3>

            <div className={styles.mainTechnologiesContainer}>
                <div className={styles.mainTechnologies}>
                    <div className={styles.imgsContainer}>
                        <img src="/images/react.png" alt="react logo" />
                        <img src="/images/next_img.png" alt="nextjs logo" />
                    </div>

                    <p className={styles.mainTechDescription}>
                        I use <strong>React.js</strong> to easily create fast and interactive user interfaces for websites by making use of the virtual DOM.
                        <br />
                        <br />
                        In addition to React.js features, I also use <strong>Next.js</strong>. It solves the problem for search engines reading the content of the page by rendering it on the server side (SSR) instead of the client side (CSR). It also makes a faster first contentful paint of the website and it can even handle backend with API routes.
                    </p>
                </div>

                <div className={styles.mainTechnologies}>
                    <p className={styles.mainTechDescription}>
                        I work on the design of websites with <strong>Figma</strong>, always keeping in consideration UI design fundamentals like color, contrast, visual hierarchy, white space, scale, proximity, alignment, consistency and typography.
                    </p>

                    <div className={styles.imgsContainer}>
                        <img src="/images/figma.png" alt="figma logo" />
                    </div>
                </div>

                <div className={styles.mainTechnologies}>

                    <div></div>

                    <div className={styles.imgsContainer}>
                        <img src="/images/css3.png" alt="css logo" />
                        <img src="/images/sass_img.png" alt="scss logo" />
                    </div>

                    <p className={styles.mainTechDescription}>
                        <strong>CSS</strong> allows style and layout of web pages. I convert Figma prototype design into a pixel perfect layout with code.
                        <br />
                        <br />
                        I also utilize the CSS preprocessor <strong>SASS</strong> for writing clean, easy and more efficient CSS code.
                    </p>
                </div>
            </div>

            <h3 className={styles.secondaryTitle}>OTHER TECHNOLOGIES</h3>

            <div className={styles.otherTechnologies}>
                <p className={styles.otherTechnologiesDescription}>
                    Alongside the powerful tools that <strong>JavaScript</strong> provides to develop software, I use the strongly typed programming language <strong>TypeScript</strong> to simplify code and make it easy to read and debug.
                    <br />
                    <br />
                    Other technologies I know: <strong>HTML, Firebase, Bootstrap, Python</strong>

                </p>
                <div className={styles.otherTechnologiesImgs}>
                    <div className={styles.imgsUpRow}>
                        <div className={styles.otherTechnologiesImg} ref={(element) => {otherTechImgs.current[0] = element}}>
                            <img src="/images/js.jpg" alt="javascript logo" />
                        </div>
                        <div className={styles.otherTechnologiesImg} ref={(element) => {otherTechImgs.current[1] = element}}>
                            <img src="/images/html5.png" alt="html logo" />
                        </div>
                        <div className={styles.otherTechnologiesImg} ref={(element) => {otherTechImgs.current[2] = element}}>
                            <img src="/images/bootstrap_img.png" alt="bootstrap logo" />
                        </div>
                    </div>
                    <div className={styles.imgsDownRow}>
                        <div className={styles.otherTechnologiesImg} ref={(element) => {otherTechImgs.current[3] = element}}>
                            <img src="/images/typescript.png" alt="typescript logo" />
                        </div>
                        <div className={styles.otherTechnologiesImg} ref={(element) => {otherTechImgs.current[4] = element}}>
                            <img src="/images/firebase.png" alt="firebase logo" />
                        </div>
                        <div className={styles.otherTechnologiesImg} ref={(element) => {otherTechImgs.current[5] = element}}>
                            <img src="/images/python.png" alt="python logo" />
                        </div>
                    </div>
                </div>
            </div>

            <h3 className={styles.secondaryTitle}>OTHER SKILLS</h3>

            <div className={styles.otherSkills}></div>

        </section>
    )
}