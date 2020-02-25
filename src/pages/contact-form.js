import React, { Component } from 'react';
import { Link } from "gatsby";
import { navigate } from 'gatsby-link'

import CartoonAvatar from '../images/TaylorAvatar-cartoon-sm.png'

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
        <div className="container">
            <section className="section" id="contact-form">
                <div className="columns">
                <div className="column is-6 is-mobile" style={{ margin: '0 auto'}}>
                    <h3 className="title is-3 text-orange">Say Hi!</h3>
                    <p><span className="bottom-line"></span></p>
                    <p>Want to work together? Please fill out <Link to="/work-together">this form</Link>.</p>
                    <img src={CartoonAvatar} className="is-hidden-mobile" alt="Cartoon avatar of Taylor Wilkinson" />
                </div>
                    <div className="column is-6 is-mobile">
                        <form action="/thank-you" method="post" netlify-honeypot="bot-field" data-netlify="true" name="general-contact" id="general-contact">
                            <div className="fields">
                                <input type="hidden" name="bot-field" />
                                <input type="hidden" name="form-name" value="general-contact" />
                                <div className="field">
                                    <label className="label" htmlFor="name">Name: </label>
                                    <div className="control">
                                        <input class="input" 
                                            type="text" 
                                            name="name" 
                                            id="name" 
                                            placeholder="Bob Ross"
                                            onChange={this.handleChange}
                                            />
                                    </div>
                                </div>
                                <div class="field">
                                    <label className="label" htmlFor="email">Email</label>
                                    <div className="control">
                                        <input className="input" 
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            placeholder="bobross@gmail.com"
                                            onChange={this.handleChange} 
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label" htmlFor="message">Message</label>
                                    <div className="control">
                                        <textarea className="textarea" name="message" id="message" placeholder="Hi there!" onChange={this.handleChange}></textarea>
                                    </div>
                                </div>
                                <div className="field">
                                    <div data-netlify-recaptcha="true"></div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <button type="submit" className="button">Send</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}
