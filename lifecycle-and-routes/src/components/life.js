import React, { Component } from 'react';

class Life extends Component{

    state = {
        title: 'Life Cycles'
    }

    componentDidMount(){
        console.log('5 after redner')
    }

    componentWillMount(){
        console.log('3 before render')
    }

    render(){
        return (
            <div>
                <h3>  { this.state.title }  </h3>
                <div onClick={
                    () => this.setState({
                        title: 'sthg else'
                        })}
                    > Click to change 
                </div>
                }
            </div>
        )
    }
}

export default Life;