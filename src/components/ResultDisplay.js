import React, { Component } from 'react'
import './ResultDisplay.css'

export default class ResultDisplay extends Component {
	constructor(props) {
	  super(props)
	
	  
	}
  render() {
	return (
	  <div className='screen'>{this.props.result}</div>
	)
  }
}
