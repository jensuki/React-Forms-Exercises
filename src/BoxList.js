// manages box state and functions related to adding, removing, editing
// renders all of the boxes
// renders newboxform to create to new boxes
//

import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';

const BoxList = () => {
    // set state
    const [boxes, setBoxes] = useState([]);

    // function to add new box to list of boxes
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, newBox]);
    }

    // function to remove box by id
    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {boxes.map(box => (
                <Box
                    key={box.id}
                    id={box.id}
                    width={box.width}
                    height={box.height}
                    backgroundColor={box.backgroundColor}
                    removeBox={removeBox}
                />
            ))}
        </div>
    )
}

export default BoxList;