import React, { Component } from "react";

function Contact(props) {
    const { name, value, setParentState } = props

    const handleOnChange = (e) => {
        setParentState(prev => ({
            contacts: {
                ...prev.contacts,
                [name]: e.target.value
            }
        }))
    }

    return (
        <div className="contact-component ">
            <div className={`svg-logo ${name}-img`}></div>
            <span><strong>{name}:</strong></span>
            <input value={value} onChange={handleOnChange}/>
        </div>
    )
}

export default Contact