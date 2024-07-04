import styles from "./Products.module.css";
import ProductItem from "../root-components/product-item";
import {NavLink} from "react-router-dom";
import ImageDescriptionHolder from "../root-components/image-description-holder";
import productImage from "../assets/common/product-placeholder.png"

const Products = () => {
    const dummyItemConfig = [{
        image: productImage,
        title: 'Lorem Ipsum',
        description:
            'Lorem ipsum dolor sit amet, consectetur  elit.',
        to: "/home"
    }, {
        image: productImage,
        title: 'Lorem Ipsum',
        description:
            'Lorem ipsum dolor sit amet, consectetur  elit.'
    }, {
        image: productImage,
        title: 'Lorem Ipsum',
        description:
            'Lorem ipsum dolor sit amet, consectetur  elit.'
    }, {
        image: productImage,
        title: 'Lorem Ipsum',
        description:
            'Lorem ipsum dolor sit amet, consectetur  elit.'
    }]


    return (
        <div className={styles.parentContainer}>
            <div className={styles.fullWidth}>
                <div className={styles.descriptionComponent}>
                    <ImageDescriptionHolder description={{
                        "primary": {
                            "question": `What have we done?`,
                            "content": "Our product portfolio is a testament to our commitment to innovation, quality and reliability. Each product is crafted with precision and a keen understanding of our users' needs and requirements. Explore our products to find out more.",
                        }
                    }} color={"#ffffff"} style={{marginLeft: 0}}/>
                </div>
            </div>
            <div className={styles.productList}>{
                dummyItemConfig.map((item, index) =>
                    <ProductItem itemConfig={item} key={index}/>
                )
            }</div>
            <div>
                <div className={"button"}>
                    <NavLink
                        to={"/products"}
                        style={{color: "white", textDecoration: "none"}}
                    >
                        <div className={"explore"}>VIEW PRODUCTS</div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Products;
