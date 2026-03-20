import Link from 'next/link'
//import styles from './Hero.module.scss';
//import { useEffect, useRef } from "react";

export default function Copy() {
  return (
    <>
      <p>Oregon Lottery is a state run lottery created in 1984 by voters in Oregon. The Lottery funds state parks, education, veterans services and is a long-standing institution in Oregon recognized by all of it's residents</p>
      <p>During my time at Pollinate working on Lottery, we launched a new jackpot game, moved the career listings from an external site to an internal page, pivoted features to comply with new legislation, updated the site for accessibility, migrated our API provider seamlessly, and managed all of the challenges that can arise from a large site that gets content changes on a constant basis.</p>
      <p>This site gets views in the hundreds of thousands and can spike into the millions. Oregon Lottery is a JAMstack site that runs on Wordpress but renders to a static site fed by various APIs. This static approach solves a lot of the issues that Wordpress has around performance and security for a site with a lot of eyes on it with large sums of money at stake.</p>
    </>
  );
}