import React, {Component} from "react";
import { Link } from "gatsby";
import BackgroundImage from "./background-image.js";



class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props,
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
      className={`column post-card is-one-third-desktop is-full-mobile`}
    >
      <BackgroundImage src={this.state.imageSrc} />
      <div className="post-excerpt">
        <p className="title">
        <Link
            dangerouslySetInnerHTML={{ __html: this.state.data.title }}
            to={`/blog/`}
          />
        </p>
        <div className="excerpt" onClick={() => this.setState({ isModalOpen: true})}>
          <div className="content">
            <p dangerouslySetInnerHTML={{ __html: this.state.data.description }} />
            <p onClick={() => this.setState({ isModalOpen: true})}>Click here</p>
          </div>
        </div>


        <div className={`modal ${this.state.isModalOpen ? 'is-active' : ''}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button className="delete" aria-label="close" onClick={() => this.setState({ isModalOpen: false})}></button>
            </header>
            <section className="modal-card-body">
              <p>This is the modal body</p>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success">Save changes</button>
              <button className="button">Cancel</button>
            </footer>
          </div>
        </div>


      </div>
    </div>
  );
  }
};

export default ProjectCard;
