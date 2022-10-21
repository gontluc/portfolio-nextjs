import styles from '../../../styles/Design1/Projects.module.css'

import Project from './Project.js'

export default function Projects({ projects }) {
    return (
        <section id={styles.projects} ref={projects}>
            <h2 className={styles.projectsSectionTitle}>PROJECTS</h2>
            <Project 
                tech={['HTML', 'SASS', 'TypeScript']}
                title={"Rogério's website"}
                description={'Building a web page for a healthcare professional using HTML, TypeScript (superset of Javascript) and SASS (CSS preprocessor)'}
                liveLink={'https://www.lucasgontijo.com'}
                codeLink={'https://www.lucasgontijo.com'}
                imgsLinks={['/images/rogerio-website.png', '/images/fake-website-original.png', '/images/organic_ecommerce_img.jpg', '/images/social-media-clone.png']}
                projectIndex={0}
            />

            <Project 
                tech={['React.js', 'CSS', 'TypeScript']}
                title={"Organic eCommerce"}
                description={'Coding the frontend of an eCommerce application using React.js and TypeScript'}
                liveLink={'https://www.lucasgontijo.com'}
                codeLink={'https://www.lucasgontijo.com'}
                imgsLinks={['/images/organic_ecommerce_img.jpg', '/images/fake-website-original.png', '/images/social-media-clone.png']}
                projectIndex={1}
            />

            <Project 
                tech={['React.js', 'CSS', 'Javascript', 'Firestore']}
                title={"Social Media Clone"}
                description={"A social media application built with React.js and Firestore from Firebase as a database. I've implemented the most common features like Likes and Comments, status, friends, search bar and a weather API. Just sign up with Google to access the app!"}
                liveLink={'https://www.lucasgontijo.com'}
                codeLink={'https://www.lucasgontijo.com'}
                imgsLinks={['/images/social-media-clone.png', '/images/fake-website-original.png', '/images/organic_ecommerce_img.jpg']}
                projectIndex={2}
            />

            <Project 
                tech={['HTML', 'CSS', 'Javascript']}
                title={"Barber Website"}
                description={'A simple website that resembles a real business web page. Built with HTML, CSS and Javascript.'}
                liveLink={'https://www.lucasgontijo.com'}
                codeLink={'https://www.lucasgontijo.com'}
                imgsLinks={['/images/fake-website-original.png', '/images/organic_ecommerce_img.jpg', '/images/social-media-clone.png']}
                projectIndex={3}
            />
        </section>
    )
}