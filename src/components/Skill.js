import React, { Component } from "react";

class Skill extends Component {
    constructor() {
        super()
        this.state = {
            isHidden: true
        }
    }

    deleteSkill = (e) => {
        const { setParentState } = this.props
        setParentState(prev => {
            const newList = prev.skillList.filter(skill => skill.id !== e.target.id)
            return ({
                skillList: newList
            })
        })
    }

    onEnter = () => {
        this.setState({
            isHidden: false
        })
    }
    
    onLeave = () => {
        this.setState({
            isHidden: true
        })
    }

    render() {
        const { skill } = this.props

        return (
            <div className="skill" onMouseEnter={this.onEnter} onMouseLeave={this.onLeave}>
                <span>{skill.name}</span>
                <div className="star-rating-buttons">
                    {[...Array(5)].map((star, index) => {
                        return (
                            <button
                                type="button"
                                key={index}
                                className={index <= skill.rating ? 'on rating-btn-show' : 'off rating-btn-show'}>

                                <span className="star">&#9733;</span>
                            </button>
                        )
                    })}
                </div>

                {!this.state.isHidden && <button className="delete-skill-btn" id={skill.id} onClick={this.deleteSkill}>Delete</button>}
            </div>
        )
    }
}

export default Skill