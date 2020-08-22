import React from 'react';

class Decrement extends React.Component {
    render() {
        return (
            <button onClick={this.props.subHandleClick}>
                -
            </button>
        );
    }
}

export default Decrement;