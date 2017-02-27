import React, { Component } from 'react'
import { Row, Col, Checkbox, InputGroup, FormControl, Glyphicon} from 'react-bootstrap'
import './style.css'

class Header extends Component {

  onClickShowDone(e){
    console.log('onClickShowDone %O', e.target.checked);
  }

  onChangeSearch(e){
    console.log('onChangeSearch ', e.target.value);
  }

  render () {

    return (
      <Row className="header">
        <Col xs={4} xsOffset={8} className="block-search">
          <Checkbox className="block-search__checkbox" defaultValue={true} onClick={this.onClickShowDone} inline>Show done</Checkbox>

          <FormControl type="text" className="search" placeholder="Search" onChange={this.onChangeSearch}/>
{/*
          <InputGroup>
            <InputGroup.Addon><Glyphicon glyph="remove"/></InputGroup.Addon>
          </InputGroup>
*/}
        </Col>
      </Row>
    );
  }
}

export default Header;