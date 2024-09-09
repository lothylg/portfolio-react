import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);

        // Email validation using a simple regex pattern
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        setEmailError(isValidEmail ? '' : 'Please enter a valid email address');
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
        const message = (event.target.value)
        setMessageError(message ? '' : 'Message is required!')
    };

    const handleBlur = (field) => {
        if (!field) {
            setFormErrors(prevErrors => ({
                ...prevErrors,
                [field]: 'This field is required'
            }));
        } else {
            setFormErrors(prevErrors => ({
                ...prevErrors,
                [field]: ''
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();


        if (Object.keys(errors).length === 0) {
            // Form submission logic goes here
            console.log('Form submitted successfully');
            resetForm();
        } else {
            setFormErrors(errors);
            console.log('Form submission failed. Please correct errors.');
        }
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
        // setEmailError('');
        setFormErrors({});
        // setMessageError('');
    };

    return (
        <div className='m-4'>
            <h3>Contact</h3> <br />
            <form className="container" onSubmit={handleSubmit}>
                <h2>Send me a message!</h2>
                <div className="row">
                    <div className="col">
                        <label>Name:</label>
                        <input 
                            type='text' 
                            className="form-control"
                            value={name}
                            onChange={handleNameChange}
                            onBlur={() => handleBlur(name)}
                        />
                        {formErrors.name && <div style={{ color: 'red' }}>Name is required</div>}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Email address:</label>
                        <input 
                            type='email' 
                            className="form-control" 
                            value={email} 
                            onChange={handleEmailChange}
                            onBlur={() => handleBlur(email)}
                        />
                        {emailError && <div style={{ color: 'red' }}>Email is required</div>}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Message:</label>
                        <textarea 
                            type="text" 
                            className="form-control"
                            value={message}
                            onChange={handleMessageChange}
                            onBlur={() => handleBlur(message)}
                        ></textarea>
                        {messageError && <div style={{ color: 'red' }}>Message is required</div>}
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}