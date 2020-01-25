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

  console.log(index)

  return (
    <div
      className={`column post-card`}
    >
      <BackgroundImage src={imageSrc} index={index}>
        <Link to={`/blog/${props.slug}`} />
      </BackgroundImage>
      <div className="post-excerpt">
        <p className="title">
        <Link
            dangerouslySetInnerHTML={{ __html: props.title }}
            to={`/blog/`}
          />
        </p>
        <div className="excerpt">
          <div className="content">
            <p dangerouslySetInnerHTML={{ __html: props.description }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
