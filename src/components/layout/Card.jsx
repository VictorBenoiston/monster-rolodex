import React from "react";
import './Card.css'

export default props => {
    return (
        <div className="card-container">
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}