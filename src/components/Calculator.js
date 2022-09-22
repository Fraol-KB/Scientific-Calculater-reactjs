import React, { Component } from 'react'
import ResultDisplay from './ResultDisplay'
import './Calculator.css'

export default class Calculator extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
		 result:0,
		 num1:''
	  }
	}

	handleBtnClick = (event) =>{
		try {
			console.log(event.target.value);
		} catch (error) {
			console.log(error)
		}

	}
	handleNumClick = (event) =>{
		try {
			
			console.log(event.target.value);
			this.setState({
				num1: this.state.num1+event.target.value
			})
			
		} catch (error) {
			console.log(error)
		}

	}
	
	render() {
		return (
			<div className='body'>
				<ResultDisplay result={this.state.num1}/>
				
				<br></br>
				<input className='operation' type="button" value={'Rad'} onClick={this.handleBtnClick}></input>
				<input className='operation' type="button" value={'Deg'} onClick={this.handleBtnClick}></input>
				<input className='operation' type="button" value={'x!'} onClick={this.handleBtnClick}></input>
				<input className='operation' type="button" value={'('} onClick={this.handleBtnClick}></input>
				<input className='operation' type="button" value={')'} onClick={this.handleBtnClick}></input>
				<input className='operation' type="button" value={'%'} onClick={this.handleBtnClick}></input>
				<input className='operation' type="button" value={'AC'} onClick={this.handleBtnClick}></input>

				<br></br>
				<input className='operation ' type="button" value={'Inv'} onClick={this.handleBtnClick}></input>
				<input className='operation' type="button" value={'Sin'} onClick={this.handleBtnClick}></input>
				<input className='operation' type="button" value={'ln'} onClick={this.handleBtnClick}></input>
				<input className='numpad' type="button" value={7} onClick={this.handleNumClick}></input>
				<input className='numpad' type="button" value={8} onClick={this.handleNumClick}></input>
				<input className='numpad' type="button" value={9} onClick={this.handleNumClick}></input>
				<input className='operation' type="button" value={'÷'} onClick={this.handleBtnClick}></input>

				<br></br>
				<input className='operation ' type="button" value={'π'} onClick={this.handleBtnClick}></input>
				<input className='operation' type="button" value={'Cos'} onClick={this.handleBtnClick}></input>
				<input className='operation' type="button" value={'log'} onClick={this.handleBtnClick}></input>
				<input className='numpad' type="button" value={4} onClick={this.handleNumClick}></input>
				<input className='numpad' type="button" value={5} onClick={this.handleNumClick}></input>
				<input className='numpad' type="button" value={6} onClick={this.handleNumClick}></input>
				<input className='operation' type="button" value={'×'} onClick={this.handleBtnClick}></input>

				<br></br>
				<input className='operation ' type="button" value={'e'} onClick={this.handleBtnClick}></input>
				<input className='operation' type="button" value={'tan'} onClick={this.handleBtnClick}></input>
				<input className='operation' type="button" value={'√ '} onClick={this.handleBtnClick}></input>
				<input className='numpad' type="button" value={1} onClick={this.handleNumClick}></input>
				<input className='numpad' type="button" value={2} onClick={this.handleNumClick}></input>
				<input className='numpad' type="button" value={3} onClick={this.handleNumClick}></input>
				<input className='operation' type="button" value={'-'} onClick={this.handleBtnClick}></input>

				<br></br>
				<input className='operation ' type="button" value={'Ans'} onClick={this.handleBtnClick}></input>
				<input className='operation' type="button" value={'EXP'} onClick={this.handleBtnClick}></input>
				<button className='operation' type="button" value={'xpowy'} onClick={this.handleBtnClick}>x <sup>y</sup></button>
				<input className='numpad' type="button" value={0} onClick={this.handleNumClick}></input>
				<input className='numpad' type="button" value={'.'} onClick={this.handleNumClick}></input>
				<input className='operation' type="button" value={'='} onClick={this.handleBtnClick}></input>
				<input className='operation' type="button" value={'+'} onClick={this.handleBtnClick}></input>
				<br></br>

			</div>
		)
	}
}
