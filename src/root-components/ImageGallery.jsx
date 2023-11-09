import styles from './root-styles/ImageGallery.module.css';

const ImageGallery = ({ images }) => {
    return (
        <div className={styles.galleryContainer}>
            <div className={styles.gallery}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index}`} className={styles.image} />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
