import Property1Default from "./Property1Default";
import styles from "./FormContainer.module.css";
import {CardCapabilities} from "../root-components/capabilities-component/CardCapabilities";
import CarouselCommon from "../root-components/carousel-common";
import SectionHead from "../root-components/section-head";

const FormContainer = () => {
    const dummyItemConfig = [{
        image: "./rectangle-961@2x.png",
        title: 'Lorem Ipsum 1',
        description:
            'Lorem ipsum dolor sit amet, consectetur  elit.',
        to: "/home"
    }, {
        image: 'https://placekitten.com/300/200',
        title: 'Lorem Ipsum',
        description:
            'Lorem ipsum dolor sit amet, consectetur  elit.'
    },{
        image: 'https://placekitten.com/300/200',
        title: 'Lorem Ipsum 3',
        description:
            'Lorem ipsum dolor sit amet, consectetur  elit.'
    },{
        image: 'https://placekitten.com/300/200',
        title: 'Lorem Ipsum 4',
        description:
            'Lorem ipsum dolor sit amet, consectetur  elit.'
    }]
    return (
        <div className={styles.containerParent}>
            <div style={{width: "90%", justifyContent: "center", display: "flex"}}>
                <SectionHead
                    title={"Lorem Ipsum 1111"}
                    primaryText={"Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"}
                    secondaryText={"Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"}
                />
            </div>

            <CarouselCommon items={dummyItemConfig.map((item, index) =>
                <CardCapabilities property1={"default"} title={item.title} description={item.description}
                                  image={item.image} key={index}/>
            )} autoPlay={false} autoplayInterval={2500} buttonPosition={"center"}/>
        </div>
    );
};

export default FormContainer;
