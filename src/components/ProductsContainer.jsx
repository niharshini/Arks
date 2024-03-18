import styles from "./ProductsContainer.module.css"
import SectionHead from "../root-components/section-head";
import {useEffect, useState} from "react";
import ConsumerCard from "../root-components/consumerCard";
import productImage from "../assets/common/product-placeholder.png";
import { Modal } from "react-responsive-modal";
import {products} from "../productsInfo.js";
import "react-responsive-modal/styles.css";
import { NavLink } from "react-router-dom";

export default function ProductsContainer() {
    const [displayItems, setDisplayItems] = useState([])
    const [keyMap, setKeyMap] = useState([]);
    const [showModal, setShowModal] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState();
   

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
            {/* <div className={styles.productsTitle}>
                <SectionHead
                    title={"Our Products"}
                    primaryText={"Lorem ipsum dolor sit amet consectetur adipiscing "}
                    color={"#000"}
                />
            </div> */}
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
                            title={item.productName} 
                            description={item.description} 
                            detailDescription={item.detailDescription}
                            to={"/contact-us"} 
                            key={index}
                            setSelectedProduct={setSelectedProduct}
                            />
                    )
                }
            </div>
            <div>

            </div>

            <Modal open={selectedProduct} onClose={() => setSelectedProduct(false)}>
                <h2 className={styles.modalTitle}>{selectedProduct?.title}</h2>
                <img
                    src={selectedProduct?.image}
                    alt="product image" style={{width: "100%", height: "280px", borderRadius:"10px 10px 0 0"}}
                />
                <p className={styles.modalDesc}>
                    {selectedProduct?.description}
                </p>
                <div className={styles.buttonContainer}> 
                    <div className={styles.button} style={{marginTop: "20px"}}>
                        <NavLink to={"/contact-us"}>
                            Contact Us<i className="fas fa-arrow-right" style={{marginLeft: "10px"}}></i>
                        </NavLink>
                    </div>
                </div>

                

                
            </Modal>
        </div>
    )
}