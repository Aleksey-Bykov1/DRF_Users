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
                {name: 'Projects', href: '/project'},
                {name: 'ToDOs', href: '/todo'},
                {name: 'Login', href: '/login'},
            ],
            users: [],
            projects: [],
            project: {},
            todos: []
        }
    }

    getToken(login, password){
        axios.post('http://127.0.0.1:8000/api-token-auth/', {"username": login, "password": password})
            .then(response => {
                console.log(response.data.token)
            })
            .catch(error => alert("Wrong password"))
    }


   getProject(id) {
        axios.get(get_url(`project/${id}`))
            .then(response => {
                console.log(response.data)
                this.setState({project: response.data})
            }).catch(error => console.log(error))
   }


    componentDidMount() {
        axios.get(get_url('users/'))
            .then(response => {
                this.setState({users: response.data.results})
            }).catch(error => console.log(error))


        axios.get(get_url('project/'))
            .then(response => {
                console.log(response.data)
                this.setState({projects: response.data.results})
            }).catch(error => console.log(error))

        axios.get(get_url('todo/'))
            .then(response => {
                console.log(response.data)
                this.setState({todos: response.data.results})
            }).catch(error => console.log(error))
    }


    render() {
        return (
            <BrowserRouter>
                <header>
                    <Navbar navbarItems={this.state.navbarItems}/>
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
                            <Route exact path='/todos'>
                                <ToDOList items={this.state.todos}/>
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
