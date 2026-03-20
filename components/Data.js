import React from "react";
export default function Data(projectName = false) {

  
  
  
  
  
  
  const allData = [
  {
    name:"Oregon Problem Gambling Resource",
    slug: 'opgr',
    image: 'opgr.jpg',
    screens: [
      'opgr-winter.png',
      'opgr-fall.png',
      'opgr-spring.png',
      'opgr-summer.png',
    ],
    url: 'https://www.opgr.org/'
  },
  {
  	name:"Oregon Lottery",
  	slug: 'oregon-lottery',
  	image: 'orl.jpg',
    screens: [
      'ol-hero.png',
      'ol-page.png'
    ],
    url: 'https://www.oregonlottery.org/'
  },
  {
    name:"Spectrum Customizer",
    slug: 'spectrum-customizer',
    image: 'spec.jpg',
    screens: [
      'spec-hero.png',
      'spec-page.png'
    ],
    url: 'https://www.spectrumcustomizer.com/'
  },
  {
    name:"Citizens Business Bank",
    slug: 'cbb',
    image: 'cbb-square.png',
    screens: [
      'cbb-hero.png',
      'cbb-page.png'
    ],
    url: 'https://www.cbbank.com/'
  },
  {
    name:"Uncle Nearest",
    slug: 'uncle-nearest',
    image: 'un-square.png',
    screens: [
      'un-hero.png',
      'un-page.png'
    ],
    url: 'https://www.unclenearest.com/'
  },
  {
  	name:"Bell Kearns",
  	slug: 'bell-kearns',
  	image: 'bell.jpg',
    screens: [
      'bell-hero.png',
      'bell-kearns-screen.jpg'
    ],
    url: 'https://bell-kearns.com/'
  },
  {
  	name:"Apollo Mechanical Contractors",
  	slug: 'apollo-mechanical',
  	image: 'apollo.jpg',
    screens: [
      'apollo-hero.png',
      'apollo-page.png'
    ],
    url: 'https://apollomech.com/'
  },
  {
  	name:"Oregon Blueberry Farms",
  	slug: 'oregon-blueberry',
  	image: 'blueberry.jpg',
    screens: [
      'blue-hero.png',
      'blue-page.png'
    ],
    url: 'https://www.oblueberry.com/'
  },
  {
  	name:"Oregon Apprenticeship",
  	slug: 'hecc',
  	image: 'hecc.jpg',
    screens: [
      'hecc-hero.png',
      'hecc-screen.jpg'
    ],
    url: 'https://oregonapprenticeship.org/'
  },
  {
  	name:"R&H Construction",
    slug: 'r-and-h-construction',
    image: 'r-and-h.jpg',
    screens: [
      'rh-hero.png',
      'rh-page.png'  
    ],
    url: 'https://rhconst.com/'
  },
  {
    name:"Amaterra Wines",
    slug: 'amaterra-wines',
    image: 'amaterra.jpg',
    screens: [
      'amaterra-hero.png',
      'amaterra-page.png'
    ],
    url: 'https://amaterrawines.com/'
  }]
  if(projectName){
  	let singleProject = false;
  	for(let x of allData){
  		if(x.slug === projectName) singleProject = x;
  	}
  	return singleProject;
  } else {
  	return allData;
  }
}