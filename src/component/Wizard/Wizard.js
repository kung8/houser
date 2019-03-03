import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { connect } from 'react-redux';
import { cancelAdd } from './../../ducks/reducer';

class Wizard extends Component {



    render() {


        return (
            <div className="container">
                <div className="wizard-header">
                    <h1>Add New Listing</h1>
                    <Link to="/">
                        <button className="cancel-button" onClick={() => this.props.cancelAdd()}>Cancel</button>
                    </Link>
                </div>
                <Route path='/wizard/step1' component={Step1} />
                <Route path='/wizard/step2' component={Step2} />
                <Route path='/wizard/step3' component={Step3} />
            </div>
        )
    }
}

export default connect('', { cancelAdd })(Wizard)