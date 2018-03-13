import React from 'react'
import { Link } from 'react-router-dom'
import './index.css';
const logo = require('../../assets/images/logo.png')

const routerList = [
    { path: '/', label: '首页' },
    { path: '/getstart', label: '新手入门' },
    { path: '/api', label: 'API' },
    { path: '/about', label: '关于' },
    { path: '/login', label: '登录' }
]
const Header = () => (
    <div>
        <div className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="#"><img className="ui-logo" src={logo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    {
                        routerList.map(router => {
                            return (
                                <li className="nav-item ft14" key={router.path}>
                                    <Link className="nav-link" to={router.path}>{router.label}</Link>
                                </li>
                            )
                        })
                    }
                    {/* <li className="nav-item ft14">
                        <a className="nav-link" href="#">首页</a>
                    </li> */}

                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </div>
            </div>
        </div>
    </div>
)
export default Header