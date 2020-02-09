import React, {useState} from 'react'
import gql from 'graphql-tag'
import {Mutation} from 'react-apollo'

const CONTACT_MUTATION = gql`
mutation CreateSubmissionMutation($clientMutationId: String!, $name: String!, $message: String!) {
    createSubmission(input: {clientMutationId: $clientMutationId, name: $name, message: $message}) {
        success
        data
    }
}
`

const ContactForm = () => {

    const [nameValue, setNameValue] = useState('')
    const [messageValue, setMessageValue] = useState('')

    return (
        <div className="container">
            <div className="columns">
                <div className="column">
                    <h3 className="title is-3 text-orange">
                        Say Hi!
                    </h3>
                </div>
                <div className="column">
                    Form here
                    <Mutation mutation={CONTACT_MUTATION}>
                        {( createSubmission, { loading, error, data }) => (
                            <React.Fragment>
                            <form 
                                onSubmit={async event => {
                                    event.preventDefault()
                                    createSubmission({
                                        variables: {
                                            clientMutationId: 'example',
                                            name: nameValue,
                                            message: messageValue
                                        }
                                    })
                                }}
                                >
                                    <label htmlFor='nameInput'>Name:</label>
                                    <input id='nameInput' value={nameValue}
                                        onChange={event => {
                                            setNameValue(event.target.value)
                                        }}
                                    />

                                     <br /><br />
                                
                                    <br /><br />
                                    <label htmlFor='messageInput'>Message:</label>
                                    <input id='messageInput' value={messageValue}
                                        onChange={event => {
                                            setMessageValue(event.target.value)
                                        }}
                                    />

                                    <br /><br />
                                    <button type="submit">Send it!</button>

                                </form>

                                <div style={{ padding: '20px' }} >
                                    {loading && <p>Loading...</p>}
                                    {error && (
                                        <p>error, but I got it anyway</p>
                                    )}
                                    {data && <p>yeah boi</p>}
                                </div>
                            </React.Fragment>
                        )}
                    </Mutation>
                </div>
            </div>
        </div>
    )


}

export default ContactForm;
