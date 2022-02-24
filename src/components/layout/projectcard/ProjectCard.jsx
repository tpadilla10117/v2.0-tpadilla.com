import React from 'react';
import styles from './ProjectCard.module.scss';

const ProjectCard = ( {img, alt, cardCoverText, onClick} ) => {
    return (
        <div className={styles.projCardContainer} onClick={onClick}>

             {/* Where I'm starting my styles: */}
        <div className={styles.projCardBox}>
          <div className={styles.imgWrapper}>
              <img src={img} alt={alt}/>
          </div>

          <div className={styles.detailsBox}>
            <div className={styles.contentBox}>
              <p>{cardCoverText}</p>
            </div>
          </div>
        </div>

        </div>
    );
};

export default ProjectCard;