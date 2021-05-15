import React from 'react';

const io = require("socket.io-client");
const socket = io("http://localhost:8000");

class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name:'',
            key: '',
            message:'',
            messages:[]
        }
    }
    async componentDidMount(){

        document.title = 'Chat | Login';

        const {match} = this.props;
        await this.setState({
            name:match.params.name,
            key:match.params.key
        })
        let {name,key} = this.state;
        socket.emit('join',{name,key},()=>{
            
        })
        return () => {
            socket.emit('Disconnect')
            socket.off();
        }
    }
    // eslint-disable-next-line
    componentDidMount(){
        socket.on('messages', (messages)=>{
            this.setState([...messages,messages])
        })
        console.log(this.state.message,this.state.messages)
    }
    render(){
        return(
            <div>
                <div className="space-64"></div>
                <div className="container-chat">
                    <div className="container-title">
                        <div className ="border-test">

                        </div>
                        <div className ="border-test">
                            
                        </div>
                    </div>
                </div>
                <div className="container-chat">
                    <div className="border-chat">
                        <div className="border-test">

                        </div>
                        <div className="border-test">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            onChange={({ target: { value } }) => this.setState({message:value})}
                        />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat