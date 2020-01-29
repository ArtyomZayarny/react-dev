import React from 'react';

export default class extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        cnt:0
     }
}

increase = () => {

this.setState({
    cnt:this.state.cnt + 1
})
}

render() {
    return(
        <>
        <strong>{this.state.cnt}</strong>
        <br/>
        <button
        onClick={() => {this.increase()}}
        >Plus 1</button>
        </>
    )
}
}

