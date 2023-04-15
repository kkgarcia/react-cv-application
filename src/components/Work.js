import React, { Component } from "react";

class Work extends Component {
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
            companyList: newList
        })
    }

    handleEdit = (e) => {
        const { setParentState } = this.props
        const { list } = this.props
        const company = list.find(comp => comp.id === e.target.id)
        setParentState({
            showInput: true,
            editStatus: true,
            company: company
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
        const { company } = this.props
        console.log('child rendering')
        return (
            <div className="work-container" onMouseEnter={this.onEnter} onMouseLeave={this.onLeave}>
                <div className="duration-wrapper">
                    <div className="duration">
                        {`${company.from}-${company.to}`}
                    </div>
                </div>
                <div className="main-info">
                    <div><strong>{company.position}</strong></div>
                    <div className="grey">{`${company.name}/${company.city}`}</div>
                    <div className="grey">{company.description}</div>
                </div>
                {!this.state.isHidden && (
                    <div className="component-buttons">
                        <button id={company.id} onClick={this.handleEdit}>Edit</button>
                        <button id={company.id} onClick={this.handleDelete}>Delete</button>
                    </div>
                )}
            </div>
        )
    }
}

export default Work