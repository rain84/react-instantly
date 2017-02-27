import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './content.style.css'

const Content = () => (
  <Row>
    <Col xs={6}>
      <p>Todo-Categories</p>
    </Col>
    <Col xs={6}>
      <p>Todo-Item</p>
    </Col>
  </Row>
);

export default Content;