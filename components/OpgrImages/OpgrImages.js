import styles from './OpgrImages.module.scss';
//import { useEffect, useRef } from "react";

export default function OpgrImages() {

      
      
      
  return (
    <div className={styles.opgrImages}>
      <div>
        <img alt="OPGR Screenshot for winter" src='/projects/screens/opgr-winter.png' />
        <img alt="OPGR Screenshot for fall" src='/projects/screens/opgr-fall.png' />
      </div>
      <div>
        <img alt="OPGR Screenshot for spring" src='/projects/screens/opgr-spring.png' />
        <img alt="OPGR Screenshot for summer" src='/projects/screens/opgr-summer.png'/>
      </div>
    </div>
  );
}