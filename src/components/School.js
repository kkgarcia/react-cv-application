import React, { Component } from "react";

class School extends Component {
    constructor() {
        super()
        this.state = {
            isHidden: true
        }
    }

    handleDelete = (e) => {
        const { setParentState } = this.props
        const { list } = this.props
        const copy = [...list]
        const newList = copy.filter(comp => comp.id !== e.target.id)
        setParentState({
            schoolList: newList
        })
    }

    handleEdit = (e) => {
        const { setParentState } = this.props
        const { list } = this.props
        const school = list.find(comp => comp.id === e.target.id)
        setParentState({
            showInput: true,
            editStatus: true,
            school: school
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
        const { school } = this.props

        return (
            <div className="work-container" onMouseEnter={this.onEnter} onMouseLeave={this.onLeave}>
                <div className="duration-wrapper">
                    <div className="duration">
                        {`${school.from}-${school.to}`}
                    </div>
                </div>
                <div className="main-info">
                    <div><strong>{school.degree}</strong></div>
                    <div className="grey">{`${school.name}/${school.city}`}</div>
                    <div className="grey">{school.description}</div>
                </div>
                {!this.state.isHidden && (
                    <div className="component-buttons">
                        <button id={school.id} onClick={this.handleEdit}>Edit</button>
                        <button id={school.id} onClick={this.handleDelete}>Delete</button>
                    </div>
                )}
            </div>
        )
    }
}

export default School