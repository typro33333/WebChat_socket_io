import React from 'react';
import Navigation from '../component/nav/nav';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import TitleIcon from '@material-ui/icons/Title';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name:'',
            name_room:'',
            key:'',
        }
    }

    async componentDidMount(){
        document.title = 'Chat | Login';
    }
    
    _onInputname = async(event) => {
        await this.setState({name:event.target.value})
    }

    _onInputRoom = async(event) =>{
        await this.setState({name_room:event.target.value})
    }
    _onInputKey = async(event) =>{
        await this.setState({key:event.target.value})
    }


    render(){
        let {name,name_room} = this.state;
        const btn_create_room = () =>{
            if(name === '' || name_room === ''){
                return true
            }
            return false
        }
        return(
            <div className="background-login">
                <Navigation />
                <div className="form-login">
                    <div className="container-form">
                        <div className="title-form">Chat With Your Friends</div>
                        <div className="grid-form">
                            <div className="new-room">
                                <h4 style={{fontSize:'500',textAlign:'center',padding:'18px'}}>Create New Room</h4>
                                <div className="input-new-room" >
                                    <div style={{padding:'18px'}}>
                                        <TextField
                                        onChange = {this._onInputname}
                                        label="Name" 
                                        placeholder=" Enter Your Name"
                                        style={{width:'100%'}}
                                        InputProps={{
                                            startAdornment: (
                                              <InputAdornment position="start">
                                                <AccountCircle />
                                              </InputAdornment>
                                            ),
                                        }}/>
                                    </div>
                                    <div style={{padding:'18px'}}>
                                        <TextField
                                        onChange = {this._onInputRoom}
                                        label="Name Room"
                                        placeholder=" Room name will preresent"
                                        style={{width:'100%'}}
                                        InputProps={{
                                            startAdornment: (
                                              <InputAdornment position="start">
                                                <TitleIcon />
                                              </InputAdornment>
                                            ),
                                        }}/>
                                    </div>
                                    <div style={{padding:'18px'}}>
                                        <TextField
                                        onChange = {this._onInputKey}
                                        label="Key"
                                        placeholder=" Key will random (not require)"
                                        style={{width:'100%'}}
                                        InputProps={{
                                            startAdornment: (
                                              <InputAdornment position="start">
                                                <VpnKeyIcon />
                                              </InputAdornment>
                                            ),
                                        }}/>
                                    </div>
                                    <div style={{padding:'26px 18px 0px 18px'}}>
                                        <Button
                                        disabled ={btn_create_room()}
                                        variant="contained" 
                                        color="primary" 
                                        style={{width:'100%',height:'44px'}}
                                        startIcon={<MeetingRoomIcon />}
                                        >
                                            Create New Room
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="new-room">
                                <h4 style={{fontSize:'500',textAlign:'center',padding:'18px'}}>Join Room</h4>
                                <div className="input-new-room" >
                                    <div style={{padding:'18px'}}>
                                        <TextField 
                                        label="Your Name"
                                        placeholder=" Enter Your Name"
                                        style={{width:'100%'}}
                                        InputProps={{
                                            startAdornment: (
                                              <InputAdornment position="start">
                                                <AccountCircle />
                                              </InputAdornment>
                                            ),
                                        }}/>
                                    </div>
                                    <div style={{padding:'18px'}}>
                                        <TextField 
                                        label="Key (*require)"
                                        placeholder=" Key room" 
                                        style={{width:'100%'}}
                                        InputProps={{
                                            startAdornment: (
                                              <InputAdornment position="start">
                                                <VpnKeyIcon />
                                              </InputAdornment>
                                            ),
                                        }}/>
                                    </div>
                                    <div style={{padding:'26px 18px 0px 18px'}}>
                                        <Button 
                                        variant="contained" 
                                        color="primary" 
                                        style={{width:'100%',height:'44px'}}
                                        startIcon={<EmojiPeopleIcon />}
                                        >
                                            Join Room
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Login