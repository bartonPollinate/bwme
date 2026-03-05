import React from "react";
export default function Data(projectName = false) {

  
  
  
  
  
  
  const allData = [{
  	name:"Oregon Lottery",
  	slug: 'oregon-lottery',
  	image: 'orl.jpg',
    screens: [

    ],
    url: 'https://www.oregonlottery.org/'
  },
  {
  	name:"Oregon Problem Gambling Resource",
  	slug: 'opgr',
  	image: 'opgr.jpg',
    screens: [

    ],
    url: 'https://www.opgr.org/'
  },
  {
  	name:"Spectrum Customizer",
  	slug: 'spectrum-customizer',
  	image: 'spec.jpg',
    screens: [

    ],
    url: 'https://www.spectrumcustomizer.com/'
  },
  {
  	name:"Amaterra Wines",
  	slug: 'amaterra-wines',
  	image: 'amaterra.jpg',
    screens: [
      '/projects/screens/amaterra-screen.jpg'
    ],
    url: 'https://amaterrawines.com/'
  },
  {
  	name:"Bell Kearns",
  	slug: 'bell-kearns',
  	image: 'bell.jpg',
    screens: [
      '/projects/screens/bell-kearns-screen.jpg',
      '/projects/screens/bell-kearns-screen.jpg'
    ],
    url: 'https://bell-kearns.com/'
  },
  {
  	name:"Apollo Mechanical Contractors",
  	slug: 'apollo-mechanical',
  	image: 'apollo.jpg',
    screens: [
      '/projects/screens/apollo-screen.jpg'
    ],
    url: 'https://apollomech.com/'
  },
  {
  	name:"Oregon Blueberry Farms",
  	slug: 'oregon-blueberry',
  	image: 'blueberry.jpg',
    screens: [

    ],
    url: 'https://www.oblueberry.com/'
  },
  {
  	name:"Oregon Apprenticeship",
  	slug: 'hecc',
  	image: 'hecc.jpg',
    screens: [
      '/projects/screens/hecc-screen.jpg'
    ],
    url: 'https://oregonapprenticeship.org/'
  },
  {
  	name:"R&H Construction",
    slug: 'r-and-h-construction',
    image: 'r-and-h.jpg',
    screens: [
      '/projects/screens/randhscreen.jpg'
    ],
    url: 'https://rhconst.com/'
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