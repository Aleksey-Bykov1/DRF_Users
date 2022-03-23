import React from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import UserList from "./components/User";
import Navbar from "./components/Menu";
import Footer from "./components/Footer";
import {ProjectList, ProjectDetail} from "./components/Project";
import ToDOList from "./components/ToDo";
import LoginForm from "./components/Auth";


const DOMAIN = 'http://127.0.0.1:8000/api/'
const get_url = (url) =>`${DOMAIN}${url}`

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarItems: [
                {name: 'Users', href: '/'},
                {name: 'Projects', href: '/projects'},
                {name: 'ToDOs', href: '/todo'},
            ],
            users: [],
            projects: [],
            project: {},
            todo: [],
            token: '',
        }
    }

    getToken(login, password){
        axios.post('http://127.0.0.1:8000/api-token-auth/', {"username": login, "password": password})
            .then(response => {
                localStorage.setItem('token', response.data.token)
                this.setState({'token': response.data.token}, this.loadData)
                console.log(response.data.token)
            })
            .catch(error => alert("Wrong password"))
    }

    logout(){
        localStorage.setItem('token', '')
        this.setState({'token': ''}, this.loadData)
    }

   getProject(id) {
        axios.get(get_url(`project/${id}`))
            .then(response => {
                // console.log(response.data)
                this.setState({project: response.data})
            }).catch(error => console.log(error))
   }

   isAuthenticated(){
        // console.log(!!this.state.token)
        return !!this.state.token
   }

   getHeaders(){
        if (this.isAuthenticated()){
            return {'Authorization': 'Token' + ' ' + this.state.token}
        }
        return {}
   }

   loadData() {
        const headers = this.getHeaders()
        axios.get(get_url('users/'), {headers})
            .then(response => {
                this.setState({users: response.data.results})
            }).catch(error => {
                console.log(error)
                this.setState({
                    'users': []
                })
        })

        axios.get(get_url('projects/'), {headers})
            .then(response => {
                console.log(response.data)
                this.setState({projects: response.data.results})
            }).catch(error => {
                console.log(error)
                this.setState({
                    'projects': []
                })
        })

        axios.get(get_url('todo/'), {headers})
            .then(response => {
                console.log(response.data)
                this.setState({todo: response.data.results})
            }).catch(error => {
                console.log(error)
                this.setState({
                    'todo': []
                })
        })
   }

    componentDidMount() {
        const token = localStorage.getItem('token')
        console.log(token)
        this.setState({token}, this.loadData)
    }


    render() {
        return (
            <BrowserRouter>
                <header>
                    <Navbar navbarItems={this.state.navbarItems}
                    isAuthenticated ={this.isAuthenticated()}
                    logout ={this.logout}/>
                </header>
                <main role="main" className="flex-shrink-0">
                    <div className="container">
                        <Switch>
                            <Route exact path='/'>
                                <UserList users={this.state.users}/>
                            </Route>
                            <Route exact path='/projects'>
                                <ProjectList items={this.state.projects}/>
                            </Route>
                            <Route exact path='/todo'>
                                <ToDOList items={this.state.todo}/>
                            </Route>
                            <Route exact path='/login' component={() =>
                                <LoginForm getToken={(login, password) => this.getToken(login, password)}/>}/>

                            <Route path="/project/:id" children={<ProjectDetail getProject={(id) => this.getProject(id)}
                                                                                item={this.state.project}/>}/>
                        </Switch>
                    </div>
                </main>
                <Footer/>
            </BrowserRouter>
        )
    }

}

export default App;
