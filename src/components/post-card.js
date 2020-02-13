import React from "react";
import { Link, navigate } from "gatsby";
import BackgroundImage from "./background-image.js";

const PostCard = props => {
  let imageSrc = null;
  if (props.media && props.media.localFile)
    imageSrc = props.media.localFile.childImageSharp.fixed.src;

  const index = props.index;

  return (
    <div
      className={`column post-card is-one-third-desktop is-full-mobile`}
    >
      <BackgroundImage src={imageSrc} index={index}>
        <Link to={`/blog/${props.slug}`} />
      </BackgroundImage>
      <div className="post-excerpt" onClick={() => navigate(`/blog/${props.slug}`)}>
        <p className="title">
          <Link to={`/blog/${props.slug}`}>
          <span
            dangerouslySetInnerHTML={{ __html: props.title }}
          />
          </Link>
        </p>
        <div className={props.excerpt === 'hide' ? 'display-none' : 'excerpt'}>
          <div className="content">
            <p dangerouslySetInnerHTML={{ __html: props.excerpt }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
