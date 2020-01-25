import React from "react";
import { Link } from "gatsby";
import BackgroundImage from "./background-image.js";

const ProjectCard = props => {
  let imageSrc = null;
  if (props.media && props.media.localFile)
    imageSrc = props.media.localFile.childImageSharp.fixed.src;

  const index = props.index;

  console.log('props')
  console.log(props)

  return (
    <div
      className={`column post-card is-one-third-desktop is-full-mobile`}
    >
      
      <div className="post-excerpt">
        <p className="title">
        
        </p>
        <div className="excerpt">
          <div className="content">
            <p>demo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
