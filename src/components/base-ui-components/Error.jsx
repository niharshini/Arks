import styles from "../../styles/error.module.css"
export default function Error() {
    return (
        <div id={styles.main}>
            <div className={styles.fof}>
                <h2>Page Not Found....</h2>
                <h1>Error 404</h1>
            </div>
        </div>
    )
}
