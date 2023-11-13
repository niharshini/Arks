import styles from "./root-styles/image-description.module.css"
import {NavLink} from "react-router-dom";

export default function ImageDescriptionHolder({description, color, secondaryColor, style, secondaryFontStyles}) {

    return (
        <>
            {description ? (<div className={styles.holderContainer} style={style}>
                {description["primary"] ? (<div className={styles.wrapper}>
                    <span className={styles.descriptionQuestion}>{description["primary"]["question"]}</span>
                    <span className={styles.descriptionPrimary}
                          style={{color: color}}>{description["primary"]["content"]}</span>
                </div>) : <></>}
                {description["secondary"] ? (<div>
                <span className={styles.descriptionSecondary} style={{color: secondaryColor, ...secondaryFontStyles}}>
                    {description["secondary"]}
                </span>
                </div>) : <></>}
                {
                    description["addLink"] ? <div className={styles.buttonContainer}>
                        <div className={"button"}>
                            <NavLink
                                to={description["addLink"]["to"]}
                                style={{color: "white", textDecoration: "none"}}
                            >
                                <div className={"explore"}>{description["addLink"]["title"]}</div>
                            </NavLink>
                        </div>
                    </div> : <></>
                }
            </div>) : <></>}
        </>
    )
}