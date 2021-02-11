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
                    <p>taylor @ twilkinson.com</p>
                    
                </div>
                    <div className="column is-6 is-mobile">
                        <img src={CartoonAvatar} className="is-hidden-mobile" alt="Cartoon avatar of Taylor Wilkinson" />
                    </div>
                </div>
            </section>
        </div>
        )
    }
}
