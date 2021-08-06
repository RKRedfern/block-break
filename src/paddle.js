import { Component } from "react"
import React from 'react'
import p5 from 'p5'

const speed = 8
class Paddle extends Component{
    constructor(props) {
      super(props)
      this.myRef = React.createRef()
      this.state = {
        width: 150,
        height: 25,
        // color: color(255),
        location: React.createVector((this.state.width / 2) - (this.state.width / 2), this.state.height - 35),
        speed: {
          right: React.createVector(speed, 0),
          left: React.createVector(speed * -1, 0)
        },
      }
    }
  
    display() {
      p5.fill(this.state.color)
      p5.rect(this.state.location.x, this.state.location.y, this.state.width, this.state.height)
    }
  
    move(direction) {
      this.state.location.add(this.state.speed[direction])
  
      if(this.state.location.x < 0) {
        this.state.location.x = 0
      } else if(this.state.location.x + this.width > this.state.width) {
        this.state.location.x = this.width - this.state.width   
      }
    }
  }

  export default Paddle