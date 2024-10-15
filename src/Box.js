import React from 'react';
import './Box.css';

const Box = ({ id, width, height, backgroundColor, removeBox }) => {
    const handleRemove = () => {
        removeBox(id);
    }

    return (
        <div
            className="Box"
            data-testid="box-div"
            style={{
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: backgroundColor,
                margin: '10px'
            }}>
            <button className="Box-Removebtn" onClick={handleRemove}>X</button>
        </div>
    )
}

export default Box;