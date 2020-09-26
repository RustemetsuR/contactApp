import React from 'react';
import ToolBar from '../ToolBar/ToolBar';
import './Layout.css';

const Layout = props => {
    return (
        <div className='layout'>
                <ToolBar />
                <div className='children-box'>
                    {props.children}
                </div>
        </div>
    );
};

export default Layout;