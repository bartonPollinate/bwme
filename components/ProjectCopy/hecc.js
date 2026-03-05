import Link from 'next/link'
//import styles from './Hero.module.scss';
//import { useEffect, useRef } from "react";

export default function Copy() {
  return (
    <>
      <p>This site is huge. I helped build this on a team while at Watson Creative and there are a lot of complex features on it owing to the fact that this needed to be a comprehensive site for two audiences: potential apprentices, and business hoping to enter the program. There is a <a href="https://oregonapprenticeship.org/explore-occupations/" target="_blank">custom tabbed</a> content element throughout the site, a <a href="https://oregonapprenticeship.org/success-stories/" target="_blank">success stories</a> section that uses a custom post type with ACF fields to populate a grid of info, but the big feature is the <a href="https://oregonapprenticeship.org/search-openings/" target="_blank">map of apprenticeships</a> that takes a dynamic feed and populates a map with pins on each business center. There are highlighted areas on the map, and a live filter that ties into a post listing below the map.</p>
        <p>It's very satisfying to see the site come to fruition knowing how much work went into it and how much value it's giving to the client and people looking to get an apprenticeship</p>
    </>
  );
}