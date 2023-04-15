import React, { Component } from "react";

class InputTab extends Component {
    constructor() {
        super()
    }

    render() {
        const { position, state, handleInput, toggleInput, closeInput, isEdit } = this.props

        return(
            <div className="input-form">
                <input type="text" name={position} placeholder={position} value={state[position]} onChange={handleInput} />
                <input type="text" name="name" placeholder="name" value={state.name} onChange={handleInput} />
                <input type="text" name="city" placeholder="city" value={state.city} onChange={handleInput} />
                <div className="from-to">
                    <input type="text" name="from" placeholder="from" value={state.from} onChange={handleInput} />
                    <input type="text" name="to" placeholder="to" value={state.to} onChange={handleInput} />
                </div>
                <textarea name="description" placeholder="description" value={state.description} onChange={handleInput} rows={5}/>
                <button onClick={toggleInput}>{isEdit ? 'Save':'Add'}</button>
                <button onClick={closeInput}>Cancel</button>
            </div>
        )
    }
}

export default InputTab