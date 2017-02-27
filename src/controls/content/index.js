import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { TodoCategories, TodoItems } from '../../controls'
import './style.css'

const Content = () => (
  <Row>
    <Col xs={6}>
      <TodoCategories/>
    </Col>
    <Col xs={6}>
      <TodoItems/>
    </Col>
  </Row>
);

export default Content;