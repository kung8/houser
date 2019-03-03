import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImage } from './../../ducks/reducer'
import { red } from 'ansi-colors';

class Step2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: this.props.image
        };
    };

    componentDidMount = () => {
        console.log(1111,this.props.image)
        // console.log(7,'mounted')
        const {image} = this.props;
        this.props.addImage(image)
    };

    handleImageInput = (value) => {
        this.setState({
            image: value
        })
        // console.log(6,value)
    };

    handlePrevious () {
        const {image} = this.state;
        this.props.addImage(image);
        
        this.props.history.push('/wizard/step1')
    }

    handleNext () {
        const {image} = this.state;
        // console.log(7,image)
        this.props.addImage(image)
        // console.log(image)
        this.props.history.push('/wizard/step3')
    }


    render() {
        // console.log(9999,this.props)
        // console.log(33333,this.props.monthlyMortgageAmount,this.props.desiredMonthlyRent)
        const {image} = this.state;
        return (
            <div>
                <div className="input-container">
                    <div className="input-values">
                        <p>Image URL</p>
                        <input
                            className="address-image-amount-input"
                            onChange={(e)=>this.handleImageInput(e.target.value)}
                            value={image}
                            type="text"
                        />
                    </div>
                </div>
                <div className="previous-next-button-container">
                    <button className="previous-button" onClick={()=>this.handlePrevious(image)}>Previous Step</button>
                    <button className="next-button" onClick={()=>this.handleNext(image)}>Next Step</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    // const { image} = reduxState
    return {
        image:reduxState.image,
        monthlyMortgageAmount:reduxState.monthlyMortgageAmount,
        desiredMonthlyRent:reduxState.desiredMonthlyRent
    }
}

export default connect(mapStateToProps,{ addImage })(Step2)