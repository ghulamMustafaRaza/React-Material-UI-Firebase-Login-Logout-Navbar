import React,{Component} from 'react';
import {AppBar, FlatButton} from 'material-ui';
import {Link} from 'react-router-dom'
import * as firebase from 'firebase'

class Logged extends Component{
    static muiName = 'FlatButton'
    render(){
        return(
            <div>
                <FlatButton onClick={() => {
                        firebase.auth().signOut()
                }} {...this.props} label="LogOut" />
                <Link to="/user" ><FlatButton  {...this.props} label="Userpanel"/></Link>
            </div>
        )
    }
}

class UnLogged extends Component{
    static muiName = 'FlatButton'
    render(){
        return(
            <div>
                <Link to="/signin" ><FlatButton  {...this.props} label="Login" /></Link>
                <Link to="/signup" ><FlatButton  {...this.props} label="SignUp"/></Link>
            </div>
        )
    }
}
class NavBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            logged : false
        }
    }
    componentDidMount(){

        firebase.auth().onAuthStateChanged(() => {
            if(firebase.auth().currentUser){
                this.setState({
                    logged:true
                })
            }
            else{
                this.setState({
                    logged:false
                })
            }
        })
    }
    render(){
        return(
            <div>
                <AppBar
                    zDepth={1}
                    title="Car Parking Booking"
                    titleStyle={{cursor:'pointer'}}
                    iconElementLeft={<span></span>}
                    iconElementRight={this.state.logged ? <Logged /> : <UnLogged />}
                />
            </div>
        )
    }
}
export default NavBar