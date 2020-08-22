//1 bring in react
import React from 'react';
//2 define my component

class Output extends React.Component {

    render() {
        console.log(this.props);
        return(
            <div>{this.props.value}</div>
        );
    }
}
//3 export my component
export default Output;