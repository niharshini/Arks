import styles from "./root-styles/section-head.module.css"

export default function SectionHead({
                                        color = "#fff",
                                        secondaryColor = "#fff",
                                        title= "Lorem Ipsum",
                                        primaryText ="Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
                                        secondaryText="Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"
                                    }) {
    return (
        <div className={styles.sectionContainer}>
            {title ? <span className={styles.sectionTitle}>{title}</span> : <></>}
            {primaryText ? <span className={styles.descriptionPrimary}
                                 style={{color: color}}>{primaryText}</span> : <></>}
            {secondaryText ? <span className={styles.descriptionSecondary} style={{color: secondaryColor}}>
                    {secondaryText}
                </span> : <></>}
        </div>
    )
}