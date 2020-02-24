import React, { Component } from 'react'
import { navigate } from 'gatsby-link'
import SimpleLayout from '../components/simple-layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends Component {
    constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
        <SimpleLayout>
            <div className="container">
                <section className="section" id="contact-form">
                    <div className="columns">
                    <div className="column is-6 is-mobile" style={{ margin: '0 auto'}}>
                        <h3 className="title is-3 text-orange">Let's work together!</h3>
                        <p><span className="bottom-line"></span></p>
                        <p><strong>Have a project in mind? Interested in working together?</strong></p>
                        <p>Please fill out the form, and I'll respond to your message as quickly as I can.</p>
                        <p>Include as much information about your project as possible, such as a potential start date gatand <em>your vision for the project.</em></p>
                        <p><strong>I look forward to hearing from you!</strong></p>
                    </div>
                        <div className="column is-6 is-mobile">
                            <form 
                                name="work-together-form"
                                method="post"
                                action="/thank-you"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                onSubmit={this.handleSubmit}
                                id="work-together-form"
                            >
                                <div className="fields">
                                    <div hidden>
                                        <label>
                                            Don’t fill this out:{' '}
                                            <input name="bot-field" onChange={this.handleChange} />
                                        </label>
                                    </div>
                                    <input type="hidden" name="form-name" value="contact-work-together" />
                                    <div className="field">
                                        <label className="label" htmlFor="work-together-name">Name: </label>
                                        <div className="control">
                                            <input class="input" 
                                                type="text" 
                                                name="work-together-name" 
                                                id="work-together-name" 
                                                placeholder="Bob Ross"
                                                onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label className="label" htmlFor="work-together-email">Email</label>
                                        <div className="control">
                                            <input className="input" 
                                                type="email" 
                                                name="work-together-email" 
                                                id="work-together-email" 
                                                placeholder="bobross@gmail.com"
                                                onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div class="control">
                                        <label className="label" htmlFor="type-of-job">What category does this job fall under?</label>
                                        <div class="select">
                                            <select id="type-of-job" name="type-of-job" onChange={this.handleChange}>
                                                <option>Long-term Contract</option>
                                                <option>New Site Build</option>
                                                <option>Edits to an Existing Website</option>
                                                <option>Landing Page/s</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="control">
                                        <label className="label" htmlFor="budget">Approximate Budget (if applicable)</label>
                                        <div class="select">
                                            <select id="budget" name="budget" onChange={this.handleChange}>
                                                <option>$2,000+</option>
                                                <option>$1,000+</option>
                                                <option>$500+</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label" htmlFor="work-together-message">Additional Details</label>
                                        <div className="control">
                                            <textarea 
                                                className="textarea" 
                                                name="work-together-message" 
                                                id="work-together-message" 
                                                placeholder="This is going to be awesome"
                                                onChange={this.handleChange}
                                            ></textarea>
                                        </div>
                                    </div>
                                
                                    <div class="field">
                                        <div class="control">
                                            <input type="submit" value="Send" className="button" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </SimpleLayout>
        )
    }
}