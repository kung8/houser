import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImage } from './../../ducks/reducer'

class Step2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: ''
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
        const {image} = this.state;
        return (
            <div>
                <h1>Image URL</h1>
                <input
                    onChange={(e)=>this.handleImageInput(e.target.value)}
                    value={image}
                    placeholder="Image URL"
                    type="text"
                />

                <button onClick={()=>this.handlePrevious(image)}>Previous Step</button>
                <button onClick={()=>this.handleNext(image)}>Next Step</button>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    // const { image} = reduxState
    return {
        image:reduxState.image
        
    }
}

export default connect(mapStateToProps,{ addImage })(Step2)