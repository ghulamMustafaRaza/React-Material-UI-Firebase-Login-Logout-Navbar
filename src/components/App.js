import React,{Component} from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './NavBar';
import Signin from './Signin';
import Signup from './Signup';
import User from './User';

injectTapEventPlugin()


export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return(
            <div>
                <Router>
                    <MuiThemeProvider>
                        <div>
                            <NavBar/>
                            <Route path="/signin" component={Signin} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/user" component={User} />
                        </div>
                    </MuiThemeProvider>
                </Router>
            </div>
        )
    }
} 