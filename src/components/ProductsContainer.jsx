import styles from "./ProductsContainer.module.css"
import SectionHead from "../root-components/section-head";
import {useEffect, useState} from "react";
import ConsumerCard from "../root-components/consumerCard";

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
                    keyMap !== [] ? <>
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
                            image={"https://images.pexels.com/photos/6791447/pexels-photo-6791447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                            title={"dummy title"} description={"dummy sekkkkkkkklkkkkkkkkkk"} to={"/contact-us"} key={index}/>
                    )
                }
            </div>
            <div>

            </div>
        </div>
    )
}