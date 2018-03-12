import React from 'react'
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => (
    <div>
        <div className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">logo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">首页</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">新手入门</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">API</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">关于</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">登录</a>
                    </li>
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