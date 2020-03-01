import React, {Component} from "react";
import { Link } from "gatsby";
import BackgroundImage from "./background-image.js";



class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: props,
      imageSrc: props.media,
      isModalOpen: false
 }
   
      console.log('image source')
      console.log(this.state.imageSrc)
  }

  // This https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

  render() {
  return (
    <div
      className={`column project-card post-card`}
    >
      <div onClick={() => this.setState({ isModalOpen: true})}>
        <BackgroundImage src={this.state.imageSrc} />
        <div className="post-excerpt">
          <p className="title">
            <span className="modal-link"
                dangerouslySetInnerHTML={{ __html: this.state.projectData.title }}
              />
          </p>
        </div>
      </div>
      <div className={`modal ${this.state.isModalOpen ? 'is-active' : ''}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title"><span
              dangerouslySetInnerHTML={{ __html: this.state.projectData.title }}
              />
              </p>
              <button className="delete" aria-label="close" onClick={() => this.setState({ isModalOpen: false})}></button>
            </header>
            <section className="modal-card-body">
              <p dangerouslySetInnerHTML={{ __html: this.state.projectData.description }} />
            </section>
            <footer className="modal-card-foot">
              {this.state.projectData.github_link.length > 0 ? 
              <span>
                <a
                href={this.state.projectData.github_link}>Github</a>
                <span> | </span>
              </span>
              : ''}
              <a
              to={this.state.projectData.live_demo_url}>See it live</a>
            </footer>
          </div>
        </div>
    </div>
  );
  }
};

export default ProjectCard;
