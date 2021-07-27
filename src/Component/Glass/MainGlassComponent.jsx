import React from 'react'
// import '../../style.css';
import styleGlass from './glass.module.css';
import ListGlassComponent from './ListGlassComponent';

export default function MainGlassComponent() {
    return (
        <div className="container-fluid p-0">
            <div className={"text-center " + styleGlass.title}>
                <h2>try glasses app online</h2>
            </div>
            <ListGlassComponent />
        </div>
    )
}
