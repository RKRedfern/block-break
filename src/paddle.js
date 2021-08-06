import { Component } from "react"
import React from 'react'
import p5 from 'p5'

class Paddle extends Component{
    constructor(props) {
      super(props)
      this.myRef = React.createRef()
    }

    handleKeyDown(e) {
      if(e.key === 'ArrowRight'){
          this.moveRight(e)
      } else if (e.key === 'ArrowLeft') {
          this.moveLeft(e)
      }
    }

    moveLeft(e){
      let leftNumbers = e.target.style.left.replace("px", "")
      let left = parseInt(leftNumbers, 10)
      if (left > 0) {
          e.target.style.left = `${left - 25}px`
      }
    }

    moveRight(e){
      let leftNumbers = e.target.style.left.replace("px", "")
      let left = parseInt(leftNumbers, 10)
      if (left <= 780) {
          e.target.style.left = `${left + 25}px`
      }
    }

    render (){
      return (
        <div className='container'>
          <div id='paddle' tabIndex={-1} style={{bottom: 0, left: '400px'}} onKeyDown={(e) => this.handleKeyDown(e)}></div>
        </div>
      )
    }
  }

  export default Paddle