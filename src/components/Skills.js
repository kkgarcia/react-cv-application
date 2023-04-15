import React, { Component} from "react";
import uniqid from 'uniqid'
import StarRating from "./StarRating";
import Skill from "./Skill";

class Skills extends Component{
    constructor() {
        super()
        this.state = {
            isButtonHidden: true,
            skillList: [
                {
                    name: 'Problem Solving',
                    rating: 3,
                    id: uniqid()
                },
                {
                    name: 'Critical Thinking',
                    rating: 4,
                    id: uniqid()
                },
                {
                    name: 'Teamwork',
                    rating: 3,
                    id: uniqid()
                },
            ],
            skill: {
                name: '',
                rating: 0,
                id: uniqid()
            },
            isInputHidden: true
        }
        this.setParentState = this.setState.bind(this)
    }

    handleInput = (e) => {
        this.setState(prev => ({
            skill: {
                ...prev.skill,
                name: e.target.value
            }
        }))
    }

    handleOnclick = () => {
        this.setState({
            skillList: [...this.state.skillList, this.state.skill],
            skill: {
                name: '',
                rating: 0,
                id: uniqid()
            },
            isInputHidden: true,
        })
    }

    showInput = () => {
        this.setState({
            isInputHidden: false
        })
    }

    handleOnCancel = () => {
        this.setState({
            skill: {
                name: '',
                rating: 0,
                id: uniqid()
            },
            isInputHidden: true,
        })
    }

    render() {
        const inputTab = (<div className="skill-input">
                            <input type="text" value={this.state.skill.name} placeholder="Skill" onChange={this.handleInput} />
                            <div>
                                <p>Rate Your Skill:</p>
                                <StarRating setParentState={this.setParentState} />
                            </div>
                            <button onClick={this.handleOnclick}>Add</button>
                            <button onClick={this.handleOnCancel}>Cancel</button>
                        </div>)

        return (
            <div className="default-wrapper">
                <div className="legend" onMouseEnter={()=>this.setState({isButtonHidden:false})} onMouseLeave={()=>this.setState({isButtonHidden:true})} >
                    <h2>Skills</h2>
                    {!this.state.isButtonHidden && <button onClick={this.showInput} >+ Add</button>}
                </div>
                {!this.state.isInputHidden && inputTab}
                {this.state.skillList.map(skill => <Skill key={skill.id} skill={skill} setParentState={this.setParentState} />)}
            </div>
        )
    }
}

export default Skills