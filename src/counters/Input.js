import React,{ Component } from 'react';

class Input extends Component {
    constructor(props) {
    super(props);
    this.inputRef  = React.createRef();
        this.state = {
            current:1
        }
    }

    render() {
        
        return (
            <>
                <input onChange={() => true} type="text" value={this.props.cnt}/>
            </>
        );
    }
}

export default Input;