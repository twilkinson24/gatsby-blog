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
              <img src={this.state.imageSrc} alt="project screenshot" />
              { console.log(this.state.projectData.description)}
              {console.log('project data')}
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

              {this.state.projectData.live_demo_url.length > 0 ? 
                <span>
                  <a
                  href={this.state.projectData.live_demo_url} target="_blank">See it Live</a>
                </span>
              : 'Live demo not available for this project'}
            </footer>
          </div>
        </div>
    </div>
  );
  }
};

export default ProjectCard;
