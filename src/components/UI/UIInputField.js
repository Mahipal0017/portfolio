import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UIInputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: !!props.defaultValue ? "" : props.defaultValue,
          inital: props.defaultValue
        }   
    }

    static getDerivedStateFromProps(newProps, currentState) {
        if (newProps.defaultValue !== currentState.value) {
            const updatedValue = !!newProps.defaultValue ? "" : newProps.defaultValue;        
            return {
              value: updatedValue
            }
        }
        return null;
    }
    
    change = (event) => {
        if (this.props.onChangeOverride) {
          this.props.onValidatedChange(this.props.name, event.target.value);
        } else {
          this.setState({value: event.target.value})
        }
    }

    render() {
        let error = null;
        if (this.props.errorMessage) {
           error = ( <div role="alert" id={`${this.props.name}-error`}><span className="error">Error: {this.props.errorMessage}</span></div> );
        }
        let inputtag =(<div className="input-block">
                        <input
                          // autocomplete="off"
                          type={this.props.type}
                          name="name"
                          onChange={this.change}
                          placeholder={this.props.label} />
                        </div>)
        
        if(this.props.inputType==="textarea"){
          inputtag= (<div className="input-block textareaType">
                      <textarea
                        // autocomplete="off"
                        rows="6"
                        type="text"
                        name="name"
                        onChange={this.change}
                        placeholder={this.props.label} />
                      </div>)
        }

        return (
            <div className={(this.props.className?this.props.className:"ui-input") + (this.props.errorMessage||this.props.customErrorMessage ? " error":"")}>
                {inputtag}
                {error}
            </div>
        )
  }

  // PROPS ......................................................
  static defaultProps = {
    required:false,
    defaultValue:"",
    customErrorMessage:"",
  };

  static propTypes = {
    //html5 required attribute - adds it to all generated inputs for a11y
    required: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    //classes for the fieldset's legend (i.e. this.props.label)
    legendClasses: PropTypes.string,
    defaultValue: PropTypes.string.isRequired,
    onValidatedChange: PropTypes.func.isRequired,
    layout: PropTypes.string,
    errorMessage:PropTypes.string,
  };
}

export default UIInputField;