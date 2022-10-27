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
                liveLink={'https://cataract-portugal.com/'}
                codeLink={'https://github.com/gontluc/rogerio-web-page'}
                imgsLinks={['/images/rogerio-website.jpg', '/images/rogerio-website2.jpg', '/images/rogerio-website3.jpg']}
                projectIndex={0}
            />

            <Project 
                tech={['React.js', 'CSS', 'TypeScript']}
                title={"Organic eCommerce"}
                description={'Coding the frontend of an eCommerce application using React.js and TypeScript'}
                liveLink={'https://organic-ecommerce.netlify.app/'}
                codeLink={'https://github.com/gontluc/frontend-ecommerce'}
                imgsLinks={['/images/organic_ecommerce_img.jpg', '/images/organic_ecommerce_img2.jpg', '/images/organic_ecommerce_img3.jpg']}
                projectIndex={1}
            />

            <Project 
                tech={['React.js', 'CSS', 'Firestore']}
                title={"Social Media Clone"}
                description={"A social media application built with React.js and Firestore from Firebase as a database. I've implemented the most common features like Likes and Comments, status, friends, search bar and a weather API. Just sign up with Google to access the app!"}
                liveLink={'https://comulle-social-media.web.app/'}
                codeLink={'https://github.com/gontluc/social-media-clone'}
                imgsLinks={['/images/social-media-clone.jpg', '/images/social-media-clone2.jpg', '/images/social-media-clone3.jpg']}
                projectIndex={2}
            />

            <Project 
                tech={['HTML', 'CSS', 'Javascript']}
                title={"Barber Website"}
                description={'A simple website that resembles a real business web page. Built with HTML, CSS and Javascript.'}
                liveLink={'https://gontlucbarbershop.netlify.app/'}
                codeLink={'https://github.com/gontluc/fake-barber-website'}
                imgsLinks={['/images/fake-website-original.jpg', '/images/fake-website-original2.jpg', '/images/fake-website-original3.jpg']}
                projectIndex={3}
            />
        </section>
    )
}