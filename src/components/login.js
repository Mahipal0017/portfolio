import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import UIInputputFiled from '../components/UI/UIInputField';

import { getRequiredField } from './modules/ConstraintsHelper';
import * as Utility from './modules/Utility';
import * as Actions from '../actions/login';


class Login extends Component {
    state = {
        isSignIn:false,
        email:'',
        password:''
    }

    getErrorMessage = (field, errors) => {
        if (errors) {
          let messages = [];
          if (Array.isArray(field)) {
            field.map(function(v, index) {
              if (errors.hasOwnProperty(v)) {
                messages.push(errors[v].join());
              }
            });
          } else {
            if (errors.hasOwnProperty(field)) {
              messages.push(errors[field].join());
            }
          }
          return messages.join();
        }
    }

    runValidations= ste => {
        let constraints = {};
        let validatedReturn = null;
    
        try {
            constraints["email"] = getRequiredField();
            constraints["password"] = getRequiredField();
            validatedReturn = Utility.confirmConstraints(ste, constraints);
        } catch(e) {
          console.log(e);
        } finally {
          return validatedReturn; 
        }
      }

    update = (key, value) => {
        let v = {};
        v[key] = value;
        this.setState(Object.assign(this.state, v));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = this.runValidations(this.state);
   
        if (validationErrors) {
          this.setState({error: validationErrors});
        } else {
          delete this.state.error;
          console.log("Passed Validation", this.state)
          this.state.isSignIn
            ?
            this.props.dispatch(Actions.requestSignIn(this.state))
            :
            this.props.dispatch(Actions.requestSignUp(this.state));
        }
    }

    handleSignInUp = () => {
        this.setState( state => {
           return {isSignIn: !state.isSignIn}
        });
        delete this.state.error;
    }

    render() {
        let signInUpLink = 'Sign In';
        let signInUpButton= 'Register';
        
        if(this.state.isSignIn){
            signInUpLink = 'Register';
            signInUpButton= 'Sign In';
        }

        return (
                <div className="login-container">
                    <div className="be-right-div"><Button color='link' className="mb-2" onClick={this.handleSignInUp}>Click here to {signInUpLink}</Button></div>
                    <UIInputputFiled 
                        label="Email"
                        name="email"
                        defaultValue={this.state.email}
                        onValidatedChange= {this.update}
                        onChangeOverride={true} 
                        errorMessage={this.getErrorMessage("email", this.state.error)}
                    />
                    <UIInputputFiled 
                        label="Password"
                        name="password"
                        type="password"
                        defaultValue={this.state.password}
                        onValidatedChange= {this.update}
                        onChangeOverride={true} 
                        errorMessage={this.getErrorMessage("password", this.state.error)}
                    />
                    <div className="be-right-div"><button className="core-btn activatedButton mt-3  w-25" onClick={this.handleSubmit}> {signInUpButton} </button></div>
                </div>
        );
    }
}

export default connect ()(Login);