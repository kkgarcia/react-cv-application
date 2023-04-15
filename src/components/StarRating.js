import React, { Component} from "react";

class StarRating extends Component {
    constructor() {
        super()
        this.state = {
            rating: 0,
            hover: 0,
        }
    }

    setRating = (index) => {
        const { setParentState } = this.props
        setParentState((prevState, props) => ({
            skill: {
                ...prevState.skill,
                rating: index,
            }
        }))

        this.setState({
            rating: index
        })
    }

    // componentDidUpdate() {
    //     console.log(this.state.rating)
    // }

    render() {

        return (
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (this.state.rating || this.state.hover) ? 'on rating-btn' : 'off rating-btn'}
                            onClick={() => this.setRating(index)}
                            onMouseEnter={() => this.setState({hover:index})}
                            onMouseLeave={() => this.setState({hover:this.state.rating})}>

                            <span className="star">&#9733;</span>
                        </button>
                    )
                })}
            </div>
        )
    }
}

export default StarRating