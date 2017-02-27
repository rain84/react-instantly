import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Input  from '../../ui/input'
import './style.css'

const TodoCategories = () => (
  <Row>
    <Col xs={12}>
      <Input.withButton
        onClick={value => console.log('Input.withButton : %O', value)}
        placeholder='Enter category title'
      >Add</Input.withButton>
    </Col>
  </Row>
);

export default TodoCategories;