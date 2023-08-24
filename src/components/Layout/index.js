import React from 'react';
import './index.scss'
import '../Sidebar/index'
import Sidebar from '../Sidebar/index'
import { Outlet } from 'react-router-dom'

const Layout = () =>{
    return (
        <div className="App">
            <Sidebar/>
            <div classname="page">
                <span classname="tags top-tags">&lt;body&gt;</span>

                <Outlet />

                <span className="tags bottom-tags">
                    &lt;body&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    )
}

export default Layout