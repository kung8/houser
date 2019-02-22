import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Step2 extends Component {
    constructor (){
        super();

        this.state = {
            image:""
        }
    }

    handleInput=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    };

    render() {
        return (
            <div>
                    <h1>Image URL</h1>
                    <input 
                        id="image" 
                        onChange={this.handleInput}
                        value={this.state.image}
                        placeholder="Image URL"
                        type="text"
                    />
                   
                    <Link to="/wizard/step1">
                        <button>Previous Step</button>
                    </Link>
                    <Link to="/wizard/step3">
                        <button>Next Step</button>
                    </Link>


            </div>
        )
    }
}

export default Step2