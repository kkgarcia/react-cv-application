import React, { Component } from "react";
import uniqid from 'uniqid'
import School from "./School";
import InputTab from "./InputTab";

class Education extends Component {
    constructor() {
        super()
        this.state = {
            isButtonHidden: true,
            showInput: false,
            editStatus: false,
            schoolList: [
                {
                    id: uniqid(),
                    name: 'University',
                    degree: 'Computer Science',
                    city: 'Minsk',
                    from: '2016',
                    to: '2022',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                }
            ],
            school: {
                id: uniqid(),
                name: '',
                degree: '',
                city: '',
                from: '',
                to: '',
                description: '',
            }
        }
        this.setParentState = this.setState.bind(this)
        this.toggleInput = this.toggleInput.bind(this)
        this.closeInput = this.closeInput.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    toggleInput = () => {

        if(this.state.editStatus) {
            const newList = this.state.schoolList.map(comp => {
                if (comp.id === this.state.school.id) {
                    const newComp = {...this.state.school} 
                    return newComp
                }
                return comp
            })

            this.setState({
                showInput: false,
                editStatus: false,
                schoolList: newList,
                school: {
                    id: uniqid(),
                    name: '',
                    degree: '',
                    city: '',
                    from: '',
                    to: '',
                    description: '',
                }
            })
            return
        }

        if(this.state.showInput) {
            //validation

            this.setState({
                    schoolList: [...this.state.schoolList, this.state.school],
                    showInput: !this.state.showInput,
                    school: {
                        id: uniqid(),
                        name: '',
                        degree: '',
                        city: '',
                        from: '',
                        to: '',
                        description: '',
                    }
                })
            return
        }

        this.setState({
            showInput: !this.state.showInput,
        })
    }

    handleInput = (e) => {
        this.setState({
            school: {
                ...this.state.school,
                [e.target.name]: e.target.value
            }
        })
    }

    closeInput = () => {
        this.setState({
            showInput: false,
            editStatus: false,
            school: {
                id: uniqid(),
                name: '',
                degree: '',
                city: '',
                from: '',
                to: '',
                description: '',
            }
        })
    }

    render() {

        const inputTab = <InputTab position='degree' handleInput={this.handleInput} state={this.state.school} toggleInput={this.toggleInput} closeInput={this.closeInput} isEdit={this.state.editStatus} />

        return (
            <div className="default-wrapper">
                <div className="legend" onMouseEnter={()=>this.setState({isButtonHidden:false})} onMouseLeave={()=>this.setState({isButtonHidden:true})}>
                    <h2>Education</h2>
                    {!this.state.isButtonHidden && !this.state.showInput && <button onClick={this.toggleInput} >+ Add</button>}
                </div>
                {this.state.showInput && inputTab}
                <div className={this.state.editStatus || this.state.showInput ? 'hide':''}>
                    {this.state.schoolList.map(comp => (
                    <School 
                        key={comp.id} 
                        shouldUpdate={[this.state.showInput, this.state.editStatus]} 
                        list={this.state.schoolList} 
                        school={comp} 
                        setParentState={this.setParentState} />)
                    )}
                </div>
            </div>
        )
    }
}

export default Education