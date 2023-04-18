import React from 'react';

class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.incrument=this.incrument.bind(this)
        this.decrument=this.decrument.bind(this)
    }

    incrument() {
        this.setState({ count: this.state.count + 1 })
  }

     decrument() {
         this.setState({ count: this.state.count - 1 })
  }

render() {
    return (
        <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.incrument}>incrument</button>
            <button onClick={this.decrument}>decpiment</button>
        </div>
    )
}
}

export default ClassCounter
