import React, { Component } from "react";
import Contact from "./Contact";
import logo from '../assets/user.png'

class GeneralInfo extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Ruslan',
            surname: 'Garcia',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            photo: logo,
            isFileInputHidden: true,
            contacts: {
                phone: '+1-302-555-003',
                email: 'example@gmail.com',
                address: 'Street Name, Town/City'
            }
        }
        this.setParentState = this.setState.bind(this)
    }

    handleFileSelect = (e) => {
        if (!e.target.files.length) return
        console.log(URL.createObjectURL(e.target.files[0]))
        this.setState({
            photo: URL.createObjectURL(e.target.files[0])
        })
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="general-info">
                <div className="general-field">
                    <div className="names-wrapper">
                        <input className="name" type="text" name="name" value={this.state.name} onChange={this.handleOnChange}></input>
                        <input className="name" type="text" name="surname" value={this.state.surname} onChange={this.handleOnChange}></input>
                    </div>
                    <textarea id="description" rows={5} name="description" value={this.state.description} onChange={this.handleOnChange}></textarea>
                </div>

                <div className="photo-field" onMouseEnter={()=> this.setState({isFileInputHidden:false})} onMouseLeave={()=> this.setState({isFileInputHidden:true})}>
                    <img id="photo" src={this.state.photo} />
                    {!this.state.isFileInputHidden && <label className="label-input-file" htmlFor="input-file">
                        Select Image
                        <input id="input-file" type="file" accept="image/*" onChange={this.handleFileSelect} multiple></input>
                    </label>}
                </div>

                <div className="contact-field">
                  {/* later conponents */}
                  <h3>CONTACT ME</h3>
                  <Contact name="phone" value={this.state.contacts.phone} setParentState={this.setParentState} />
                  <Contact name="email" value={this.state.contacts.email} setParentState={this.setParentState} />
                  <Contact name="address" value={this.state.contacts.address} setParentState={this.setParentState} />
                </div>
            </div>
        )
    }
}

export default GeneralInfo