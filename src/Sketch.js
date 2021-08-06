// import React from 'react'
// import p5 from 'p5'
// import Paddle from './paddle'

// let pad 

// class Sketch extends React.Component {
//     constructor(props) {
//         super(props)
//         this.myRef = React.createRef()
//         this.state = {
//             paddle: ''
//         }
//     }

//     Sketch = (p) => {
//         let canvas, paddle, paddle2

//         p.setup = () => {
//             canvas = p.createCanvas(800,600)
//         }

//         const setup = (p5, canvasParentRef) => {
//             p5.createCanvas(500, 400).parent(canvasParentRef)
//           }

//         p.draw = () => {
//             p.background(20)
//             p.rect(p.width / 2.5, p.height - 40, 150, 20, 20)
            
//         }

//         //p5 event on key press
//         p.keyPressed = (e) => {
//             // working, but you have to keep pressing key for each move
//             // maybe try while loop?? or recursion
            
//             if(e.key === 'ArrowRight'){
//                 p.moveRight(e)
//             } else if (e.key === 'ArrowLeft') {
//                 p.moveLeft(e)
//             }

           
//             // not working, but need something similar:
//             // if(e.key === 'ArrowRight'){
//             //     this.setState(prevState => {
//                     // return {...prevState, paddle: paddle.width + 20}
//             //         if (prevState.paddle){
//             //             debugger
//             //             return {...prevState, paddle: p.rect(p.width +=20, p.height - 40, 150, 20, 20)}
//             //         } else {
//             //             debugger
//             //             return {paddle: p.rect(p.width, p.height - 40, 150, 20, 20)}
//             //         }
//             //     })
//             // }
//         }

//         p.moveRight = (e) => {
//             // how to make consistent movement while key pressed?
//             p.width += 20
           
//         }

//         p.moveLeft = (e) => {
//             p.width -= 20    
//         }
//     }

//     componentDidMount() {
//         this.myP5 = new p5(this.Sketch, this.myRef.current)
//     }

//     componentDidUpdate() {
//         this.myP5.remove()
//         this.myP5 = new p5(this.Sketch, this.myRef.current)
//     }

//     componentWillUnmount() {
//         this.myP5.remove()
//     }

//     render() {
//         return (
//             //This div will contain our p5 sketch
//             <div ref={this.myRef}>
//             </div>
//         )
//     }
// }

// export default Sketch;

