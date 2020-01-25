import React, {Component} from "react";
import { Link } from "gatsby";
import BackgroundImage from "./background-image.js";



class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props,
      isModalOpen: false
 }
  }


  // This https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-react-component-5604830beb7f

  render() {
  return (
    <div
      className={`column post-card`}
    >
      <BackgroundImage src={this.state.data.media.localFile.childImageSharp.fixed.src}>
        <Link to={`/blog/}`} />
      </BackgroundImage>
      <div className="post-excerpt">
        <p className="title">
        <Link
            dangerouslySetInnerHTML={{ __html: this.state.data.title }}
            to={`/blog/`}
          />
        </p>
        <div className="excerpt">
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
