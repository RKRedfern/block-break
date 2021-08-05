import React from 'react'
import p5 from 'p5'

class Sketch extends React.Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {
            paddle: props.rect(p.width / 2.5, p.height - 40, 150, 20, 20)
        }
    }

    Sketch = (p) => {
        var canvas;
        //let paddle = p.rect(p.width / 2.5, p.height - 40, 150, 20, 20);

        p.setup = () => {
            canvas = p.createCanvas(800,800)
        }

        p.draw = () => {
            p.background(20)
            //paddle = p.rect(p.width / 2.5, p.height - 40, 150, 20, 20)
        }

        //p5 event on key press
        p.keyPressed = (e) => {
            //console.log(e.key)
            if(e.key === 'ArrowRight'){
                console.log('something')
            }
        }

        p.move = () => {
            console.log('something')
        }
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    componentDidUpdate() {
        this.myP5.remove()
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    componentWillUnmount() {
        this.myP5.remove()
    }

    render() {
        return (
            //This div will contain our p5 sketch
            <div ref={this.myRef}>

            </div>
        )
    }
}

export default Sketch;

