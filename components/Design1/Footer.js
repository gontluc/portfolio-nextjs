import { useEffect, useRef } from 'react'
import styles from '../../styles/Design1/Footer.module.css'

export default function Footer({ header }) {

    const arrowUp = useRef(null)

    useEffect(() => {
        // Animating arrowUp
        setInterval(() => {
            arrowUp.current.style.transform = "translateY(-30%)";

            setTimeout(() => {
                arrowUp.current.style.transform = "translateY(0)";
            }, 500);

            setTimeout(() => {
                arrowUp.current.style.transform = "translateY(-30%)";
            }, 1000);

            setTimeout(() => {
                arrowUp.current.style.transform = "translateY(0)";
            }, 1500);

            setTimeout(() => {
                arrowUp.current.style.transform = "translateY(-30%)";
            }, 2000);

            setTimeout(() => {
                arrowUp.current.style.transform = "translateY(0)";
            }, 2500);
        }, 4500);
    }, [])

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <h3 className={styles.myName}>Lucas Gontijo</h3>

                <div className={styles.socialLinks}>
                    <div className={styles.link}>
                        <a href="https://github.com/gontluc">
                            <svg className={styles.linkGH} width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21 0.0057373C9.67375 0.0057373 0.5 9.17949 0.5 20.5057C0.5 29.577 6.36812 37.2389 14.5169 39.9551C15.5419 40.1345 15.9262 39.5195 15.9262 38.9814C15.9262 38.4945 15.9006 36.8801 15.9006 35.1632C10.75 36.1114 9.4175 33.9076 9.0075 32.7545C8.77688 32.1651 7.7775 30.3457 6.90625 29.8589C6.18875 29.4745 5.16375 28.5264 6.88062 28.5007C8.495 28.4751 9.64812 29.987 10.0325 30.602C11.8775 33.7026 14.8244 32.8314 16.0031 32.2932C16.1825 30.9607 16.7206 30.0639 17.31 29.5514C12.7488 29.0389 7.9825 27.2707 7.9825 19.4295C7.9825 17.2001 8.77688 15.3551 10.0838 13.9201C9.87875 13.4076 9.16125 11.3064 10.2888 8.48761C10.2888 8.48761 12.0056 7.94949 15.9262 10.5889C17.5662 10.1276 19.3088 9.89699 21.0513 9.89699C22.7938 9.89699 24.5363 10.1276 26.1763 10.5889C30.0969 7.92386 31.8138 8.48761 31.8138 8.48761C32.9412 11.3064 32.2238 13.4076 32.0188 13.9201C33.3256 15.3551 34.12 17.1745 34.12 19.4295C34.12 27.2964 29.3281 29.0389 24.7669 29.5514C25.51 30.192 26.1506 31.422 26.1506 33.3439C26.1506 36.0857 26.125 38.2895 26.125 38.9814C26.125 39.5195 26.5094 40.1601 27.5344 39.9551C31.6039 38.5811 35.1402 35.9656 37.6454 32.4767C40.1507 28.9877 41.4988 24.801 41.5 20.5057C41.5 9.17949 32.3263 0.0057373 21 0.0057373Z" fill="#ffffff"/>
                            </svg>
                        </a>
                    </div>

                    <div className={styles.link}>
                        <a href="https://www.linkedin.com/in/lucasgontijoguimaraes/">
                            <svg className={styles.linkLI} width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.3008 12.0494H18.367V15.071C19.2408 13.3332 21.4817 11.7717 24.848 11.7717C31.3013 11.7717 32.8334 15.2311 32.8334 21.5782V33.3333H26.3001V23.0237C26.3001 19.4092 25.4263 17.3708 23.2017 17.3708C20.1163 17.3708 18.8341 19.5676 18.8341 23.0221V33.3333H12.3008V12.0494ZM1.09775 33.0557H7.63108V11.7717H1.09775V33.0557ZM8.56698 4.83167C8.56722 5.37929 8.45862 5.92149 8.24748 6.42676C8.03634 6.93204 7.72688 7.39031 7.33708 7.77494C6.5472 8.55996 5.47804 8.99937 4.36442 8.99667C3.25275 8.99593 2.18606 8.55763 1.39502 7.77657C1.00663 7.39064 0.698212 6.93185 0.487443 6.42651C0.276674 5.92117 0.167694 5.37921 0.166748 4.83167C0.166748 3.72591 0.607748 2.66751 1.39665 1.88677C2.18699 1.10466 3.25414 0.666183 4.36605 0.666672C5.47998 0.666672 6.54818 1.10604 7.33708 1.88677C8.12435 2.66751 8.56698 3.72591 8.56698 4.83167Z" fill="#ffffff"/>
                            </svg>
                        </a>
                    </div>

                    <div className={styles.link}>
                        <a href="mailto:gontijoguimaraeslucas@gmail.com">
                            <svg className={styles.linkE} width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.8929 0.589279H3.10714C2.44884 0.589279 1.81749 0.85079 1.352 1.31628C0.886511 1.78177 0.625 2.41312 0.625 3.07142V22.9286C0.625 23.5869 0.886511 24.2182 1.352 24.6837C1.81749 25.1492 2.44884 25.4107 3.10714 25.4107H32.8929C33.5512 25.4107 34.1825 25.1492 34.648 24.6837C35.1135 24.2182 35.375 23.5869 35.375 22.9286V3.07142C35.375 2.41312 35.1135 1.78177 34.648 1.31628C34.1825 0.85079 33.5512 0.589279 32.8929 0.589279ZM30.1625 3.07142L18 11.4859L5.8375 3.07142H30.1625ZM3.10714 22.9286V4.2008L17.2926 14.0177C17.5003 14.1618 17.7472 14.239 18 14.239C18.2528 14.239 18.4997 14.1618 18.7074 14.0177L32.8929 4.2008V22.9286H3.10714Z" fill="#ffffff"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className={styles.arrowUpContainer}>
                    <div className={styles.arrowUp} onClick={() => header.current.scrollIntoView()} ref={arrowUp}>
                        <img src="/images/arrow-up.png" alt="go to header" />
                    </div>
                </div>
            </div>
        </footer>
    )
}