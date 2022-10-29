import { useEffect, useState, useRef } from 'react'

import styles from '../../../styles/Design1/Projects.module.css'

export default function Project({ tech, title, description, liveLink, codeLink, imgsLinks, projectIndex }) {

    const [indexImg, setIndexImg] = useState(0)

    const [delayBool, setDelayBool] = useState(true)

    const projectImg = useRef(null)

    /* Loop through project imgs */
    useEffect(() => {
        setTimeout(() => {
            setTimeout(() => {
                projectImg.current.style.opacity = "0"
            }, 3600)
    
            setTimeout(() => {
                projectImg.current.style.opacity = "1"
    
                if (indexImg + 1 === imgsLinks.length) {
                    setIndexImg(0)
                } else {
                    setIndexImg(indexImg + 1)
                }
            }, 4000)
            setDelayBool(false)
        }, delayBool ? projectIndex * 1000 : 0)
    }, [indexImg])

    return (
        <div className={styles.project}>
            <div className={styles.projectText}>
                <div className={styles.projectTechs}>
                    {tech.map((technology) => {
                        return (
                            <div className={styles.projectTech} key={technology}>{technology}</div>
                        )
                    })}
                </div>

                <h2 className={styles.projectTitle}>{title}</h2>

                <p className={styles.projectDescription}>{description}</p>

                <div className={styles.projectBtns}>
                    {liveLink && 
                        <div className={styles.liveLink}>
                            <a href={liveLink}>See Live</a>
                        </div>
                    }

                    <div className={styles.codeLink}>
                        <a href={codeLink}>Source Code</a>
                    </div>
                </div>
            </div>

            <a href={liveLink ? liveLink : codeLink}>
                <img 
                    className={styles.projectImgs} 
                    src={imgsLinks[indexImg]} 
                    alt={title}
                    ref={projectImg}
                />
            </a>

            {/* Render all imgs without displaying them */}
            {imgsLinks.map((imgLink, index) => {
                return (
                    <img key={index} className={styles.ignoreImg} src={imgLink} />
                )
            })}
            
        </div>
    )
}