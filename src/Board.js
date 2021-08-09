
import React from 'react'

class Board extends React.Component{
    renderSquare(i) {
        return <Square key={i} class={this.props.squares[i]} />;
    }

    generateRow(index, max) {
        let rows = [];
    
        for (index; index < max; index++) {
            rows.push(this.renderSquare(index));
            }
            return rows;
    };

    render (){
        return (
        <div className='game-board'>
            
        </div>
        )
    }

    generateBoard(columns, rows) {
        let board = [];

        for (let i = 0; i < columns*rows; i+=columns) {
            board.push(
                <div className="board-row" key={i}>
                    {this.generateRow(i, i + columns)}
                </div>
                ); 
            }
        
            return board;
        };
}

class Square extends React.Component {
    render() {
    return (
        <button className={"square " + this.props.class} ></button>
    );
    }
}

export default Board;