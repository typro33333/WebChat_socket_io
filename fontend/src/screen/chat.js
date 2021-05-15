import React from 'react';
import Navigation from '../component/nav/nav';
import io from 'socket.io-client';

var socket = io('localhost:5000');
class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state ={

        }
    }
    componentDidMount(){
        console.log(socket)
    }
    render(){
        return(
            <div>
                <Navigation />
            </div>
        )
    }
}

export default Chat