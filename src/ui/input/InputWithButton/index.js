import React, { PureComponent } from 'react'
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap'
import './style.css'

class InputWithButton extends PureComponent {
  static displayName = 'InputWithButton';

  static propTypes = {
    className: React.PropTypes.string,
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    children: React.PropTypes.string,
    onClickButton: React.PropTypes.func
  };

  constructor () {
    super();

    this.onClick = this.onClick.bind(this);
  };

  onClick (e) {
    const { value } = this.nodeInput;
    this.props.onClick(value);
  };

  render () {
    return (
      <FormGroup className={`input__with-button ${this.props.className}`}>
        <InputGroup>

          <FormControl type="text"
                       value={this.props.value}
                       placeholder={this.props.placeholder}
                       inputRef={ref => this.nodeInput = ref}/>

          <InputGroup.Button>
            <Button onClick={this.onClick}>{this.props.children}</Button>
          </InputGroup.Button>

        </InputGroup>
      </FormGroup>
    );
  }
}

export default InputWithButton;