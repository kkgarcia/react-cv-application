import React, { Component } from "react";
import uniqid from 'uniqid'
import Work from "./Work";
import InputTab from "./InputTab";

class WorkExperiences extends Component {
    constructor() {
        super()
        this.state = {
            isButtonHidden: true,
            showInput: false,
            editStatus: false,
            companyList: [ 
            {
                id: uniqid(),
                name: 'Facebook',
                position: 'Software Engineer',
                city: 'San Francisco',
                from: '2018',
                to: '2019',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            },
            {
                id: uniqid(),
                name: 'Amazon',
                position: 'Software Engineer',
                city: 'Seatle',
                from: '2020',
                to: '2022',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
            }
            ],
            company: {
                id: uniqid(),
                name: '',
                position: '',
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
            const newList = this.state.companyList.map(comp => {
                if (comp.id === this.state.company.id) {
                    const newComp = {...this.state.company} 
                    return newComp
                }
                return comp
            })

            this.setState({
                showInput: false,
                editStatus: false,
                companyList: newList,
                company: {
                    id: uniqid(),
                    name: '',
                    position: '',
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
                    companyList: [...this.state.companyList, this.state.company],
                    showInput: !this.state.showInput,
                    company: {
                        id: uniqid(),
                        name: '',
                        position: '',
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

    // componentDidUpdate() {
    //     console.log(this.state.companyList)
    // }

    handleInput = (e) => {
        this.setState({
            company: {
                ...this.state.company,
                [e.target.name]: e.target.value
            }
        })
    }

    closeInput = () => {
        this.setState({
            showInput: false,
            editStatus: false,
            company: {
                id: uniqid(),
                name: '',
                position: '',
                city: '',
                from: '',
                to: '',
                description: '',
            }
        })
    }

    render() {

        const inputTab = <InputTab position='position' handleInput={this.handleInput} state={this.state.company} toggleInput={this.toggleInput} closeInput={this.closeInput} isEdit={this.state.editStatus} />

        return (
            <div className="default-wrapper">
                <div className="legend" onMouseEnter={()=>this.setState({isButtonHidden:false})} onMouseLeave={()=>this.setState({isButtonHidden:true})}>
                    <h2>Work Experiences</h2>
                    {!this.state.isButtonHidden && !this.state.showInput && <button onClick={this.toggleInput} >+ Add</button>}
                </div>
                {this.state.showInput && inputTab}
                <div className={this.state.editStatus || this.state.showInput ? 'hide':''}>
                    {this.state.companyList.map(comp => (
                    <Work 
                        key={comp.id} 
                        shouldUpdate={[this.state.showInput, this.state.editStatus]} 
                        list={this.state.companyList} 
                        company={comp} 
                        setParentState={this.setParentState} />)
                    )}
                </div>
            </div>
        )
    }
}

export default WorkExperiences