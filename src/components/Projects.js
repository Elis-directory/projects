import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ThumbnailRedirect from './ThumbnailRedirect';
import placeholderImage from './placeholder.png';

const Projects = () => {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <section id="projects">
      <h2>Projects</h2>
     
	<Carousel responsive={responsive}>
  		<div>
 		<ThumbnailRedirect 
           		websiteUrl="http://localhost:3001" // URL to your other project
            		previewImageUrl={placeholderImage}/>
		</div>
 		<div>
			<ThumbnailRedirect 
           		websiteUrl="http://localhost:3001" // URL to your other project
            		previewImageUrl={placeholderImage}/>
		</div>
  		<div>
			<ThumbnailRedirect 
           		websiteUrl="http://localhost:3001" // URL to your other project
            		previewImageUrl={placeholderImage}/>
		</div>

</Carousel>

    </section>
  );
};

export default Projects;
