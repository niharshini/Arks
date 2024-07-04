import styles from "./ProductsContainer.module.css"
import SectionHead from "../root-components/section-head";
import {useEffect, useState} from "react";
import ConsumerCard from "../root-components/consumerCard";
import productImage from "../assets/common/product-placeholder.png"

export default function ProductsContainer() {
    const [displayItems, setDisplayItems] = useState([])
    const [keyMap, setKeyMap] = useState([])
    const products = [
        {
            "type": "defense",
            "typeTitle": "Defense",
            "productName": "Defense Prod 1",
            "description": "Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy."
        }, {
            "type": "defense",
            "typeTitle": "Defense",
            "productName": "Defense Prod 2",
            "description": "Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy."
        }, {
            "type": "defense",
            "typeTitle": "Defense",
            "productName": "Defense Prod 3",
            "description": "Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy."
        }, {
            "type": "application-boards",
            "typeTitle": "Application Boards",
            "productName": "Application Prod 1",
            "description": "Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy."
        }, {
            "type": "application-boards",
            "typeTitle": "Application Boards",
            "productName": "Application Prod 2",
            "description": "Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy."
        }, {
            "type": "application-boards",
            "typeTitle": "Application Boards",
            "productName": "Application Prod 3",
            "description": "Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy."
        }, {
            "type": "industrial",
            "typeTitle": "Industrial",
            "productName": "Industrial Prod 2",
            "description": "Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy."
        }, {
            "type": "industrial",
            "typeTitle": "Industrial",
            "productName": "Industrial Prod 1",
            "description": "Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy."
        }, {
            "type": "industrial",
            "typeTitle": "Industrial",
            "productName": "Industrial Prod 3",
            "description": "Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy, Lorem Ipsum. dummy."
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
                    title={"Our Products"}
                    primaryText={"Lorem ipsum dolor sit amet consectetur adipiscing "}
                    color={"#000"}
                />
            </div>
            <div>
                <span className={styles.tabTitle} onClick={
                    () => {
                        setDisplayItems(products)
                        console.log(products)
                    }
                }>All</span>
                {
                    keyMap ? <>
                        {
                            keyMap.map((item, index) =>
                                <span onClick={
                                    () => {
                                        setDisplayItems(item["items"])
                                        console.log(item["items"])
                                    }
                                } className={`${styles.tabTitle} ${styles.tabTitleMap}`}
                                      key={index}>{item["typeTitle"]}</span>
                            )
                        }
                    </> : <></>
                }
            </div>
            <div className={styles.productItems}>
                {
                    displayItems.map(
                        (item, index)=> <ConsumerCard
                            image={productImage}
                            title={item.productName} description={item.description} to={"/contact-us"} key={index}/>
                    )
                }
            </div>
            <div>

            </div>
        </div>
    )
}