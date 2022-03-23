import React from 'react'
import {
    Link
} from "react-router-dom";

function NavbarItem({name, href}) {
    return (
        <li className="nav-item active">
            <Link className="nav-link" to={href}>{name}</Link>
        </li>
    )
}

export default function Navbar({navbarItems, logout, isAuthenticated }) {

    // let login_button = ''
    // if (auth) {
    // login_button = <button className="btn btn-outline-success my-2 my-sm-0" onClick={logout}>Logout</button>
    // }
    // else {
    //   login_button = <Link to='/login' className="btn btn-outline-success my-2 my-sm-0">Login</Link>
    // }


    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end">
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                                {navbarItems.map((item) => <NavbarItem name={item.name} href={item.href}/>)}
                </ul>
                <form className="form-inline mt-2 mt-md-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    {/*{isAuthenticated ?*/}
                    {/*    <button className="btn btn-outline-success my-2 my-sm-0" onClick={logout}>Logout</button> :*/}
                    {/*    <Link to='/login' className="btn btn-outline-success my-2 my-sm-0">Login</Link>*/}
                    {/*}*/}
                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={logout}>Logout</button>


                </form>
            </div>
        </nav>
    )
}