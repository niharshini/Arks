import styles from "./ProductsContainer.module.css"
import SectionHead from "../root-components/section-head";
import {useEffect, useState} from "react";

export default function ProductsContainer() {
    const [displayItems, setDisplayItems] = useState([])
    const [keyMap, setKeyMap] = useState([])
    const products = [
        {
            "type": "defense",
            "typeTitle": "Defense",
            "product-name": "Defense Prod 1",
            "item-description": "Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy."
        }, {
            "type": "defense",
            "typeTitle": "Defense",
            "product-name": "Defense Prod 1",
            "item-description": "Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy."
        }, {
            "type": "defense",
            "typeTitle": "Defense",
            "product-name": "Defense Prod 1",
            "item-description": "Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy."
        }, {
            "type": "application-boards",
            "typeTitle": "Application Boards",
            "product-name": "Defense Prod 1",
            "item-description": "Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy."
        }, {
            "type": "application-boards",
            "typeTitle": "Application Boards",
            "product-name": "Defense Prod 1",
            "item-description": "Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy."
        }, {
            "type": "application-boards",
            "typeTitle": "Application Boards",
            "product-name": "Defense Prod 1",
            "item-description": "Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy."
        }, {
            "type": "industrial",
            "typeTitle": "Industrial",
            "product-name": "Defense Prod 1",
            "item-description": "Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy."
        }, {
            "type": "industrial",
            "typeTitle": "Industrial",
            "product-name": "Defense Prod 1",
            "item-description": "Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy."
        }, {
            "type": "industrial",
            "typeTitle": "Industrial",
            "product-name": "Defense Prod 1",
            "item-description": "Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy."
        }
    ]

    useEffect(() => {
        setDisplayItems(products)
        let groupedByType = products.reduce((result, current) => {
            if (!result[current.type]) {
                result[current.type] = {type: current.type, typeTitle: current.typeTitle, items: []};
            }
            result[current.type].items.push(current);
            return result;
        }, {});
        setKeyMap(Object.values(groupedByType))
    }, []);
    return (
        <div className={styles.productsContainer}>
            <div className={styles.productsTitle}>
                <SectionHead
                    title={"Lorem Ipsum 1111"}
                    primaryText={"Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"}
                    secondaryText={"Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"}
                    color={"#000"}
                />
            </div>
            <div>
                <span onClick={
                    () => {
                        setDisplayItems(products)
                        console.log(products)
                    }
                }>All</span>
                {
                    keyMap !== [] ? <>
                        {
                            keyMap.map(item =>
                                <span onClick={
                                    () => {
                                        setDisplayItems(item["items"])
                                        console.log(item["items"])
                                    }
                                }>{item["typeTitle"]}</span>
                            )
                        }
                    </> : <></>
                }
            </div>
            <div>

            </div>
        </div>
    )
}