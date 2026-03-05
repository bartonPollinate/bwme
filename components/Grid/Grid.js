import Link from 'next/link'
import styles from './Grid.module.scss';
import Data from '@components/Data';
//import styles from './Hero.module.scss';
//import { useEffect, useRef } from "react";

export default function Grid(props) {
  const allData = Data();
  const current = (props.current) ? props.current : true;
  return (
    <div className={styles.wrapper}>
      <img src="/47short.svg" alt="" role="presentation" className="fortyseven" />
      <div className={styles.container}>
        {allData.map((v,i)=>(
          (current !== v.slug) &&
          <Link key={i} href={'/project/'+v.slug} className={styles.link}>
            <h3 className={styles.heading}>{v.name}</h3>
          <img className={styles.img} src={'/projects/'+v.image} alt={v.name} />
        </Link>
        ))}
      </div>
    </div>
  );
}