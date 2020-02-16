import React from 'react';

import CartoonAvatar from '../images/TaylorAvatar-cartoon-sm.png'

const ContactForm = () => (
    <div className="container">
        <section className="section" id="contact-form">
            <div className="columns">
            <div className="column is-6 is-mobile" style={{ margin: '0 auto'}}>
                <h3 className="title is-3 text-orange">Say Hi!</h3>
                <p><span className="bottom-line"></span></p>
                <p>Want to work together? Please fill out this form.</p>
                <img src={CartoonAvatar} className="is-hidden-mobile" alt="Cartoon avatar of Taylor Wilkinson" />
            </div>
                <div className="column is-6 is-mobile">
                    <form action="POST" data-netlify="true">
                        <div className="fields">
                            <div className="field">
                                <label className="label">Name: </label>
                                <div className="control">
                                    <input class="input" type="text" name="name" placeholder="Bob Ross" />
                                </div>
                            </div>
                            <div class="field">
                                <label className="label">Email</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input" type="email" name="email" placeholder="bobross@gmail.com" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    <span className="icon is-small is-right">
                                        <i className="fas fa-exclamation-triangle"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Message</label>
                                <div className="control">
                                    <textarea className="textarea" name="message" placeholder="Textarea"></textarea>
                                </div>
                            </div>
                            <div className="field">
                                <div data-netlify-recaptcha="true"></div>
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
);

  export default ContactForm;