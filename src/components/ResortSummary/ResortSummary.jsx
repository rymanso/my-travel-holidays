import { isMobile } from "react-device-detect";
import styles from "./ResortSummary.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ResortSummary = ({
  resortName,
  slogan,
  slideImages,
  description,
  children,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.resortName}>{resortName}</div>
      <div className={styles.slogan}>{slogan}</div>
      <div className={styles.carouselWrapper}>
        <Carousel
          showThumbs={false}
          showArrows={true}
          stopOnHover={false}
          animationHandler="fade"
          swipeable={false}
          autoPlay
          infiniteLoop
          interval={5000}
          transitionTime={1000}
        >
          {slideImages.map((slideImage) => (
            <div key={slideImage.url} className={styles.imgContainer}>
              <img
                src={slideImage.url}
                className={styles.bigImg}
                alt={slideImage.caption}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div
        className={styles.content}
        style={{ flexDirection: isMobile ? "column" : "row" }}
      >
        {children}
      </div>
    </div>
  );
};
