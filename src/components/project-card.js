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
      <BackgroundImage src={this.state.imageSrc} onClick={() => this.setState({ isModalOpen: false})}/>
      <div className="post-excerpt" onClick={() => this.setState({ isModalOpen: true})}>
        <p className="title">
          <span className="modal-link"
              dangerouslySetInnerHTML={{ __html: this.state.projectData.title }}
            />
        </p>


  
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
              <Link
              to={this.state.projectData.github_link}>Github</Link>
              <span> | </span>
              <Link
              to={this.state.projectData.live_demo_url}>See it live</Link>
            </footer>
          </div>
        </div>
    </div>
  );
  }
};

export default ProjectCard;
