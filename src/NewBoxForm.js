import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './NewBoxForm.css'

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        width: '',
        height: '',
        backgroundColor: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [isEmpty, setIsEmpty] = useState(false);

    // handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    // handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // check if any fields are empty
        if (!formData.width || !formData.height || !formData.backgroundColor) {
            setIsEmpty(true);
            return;
        }

        addBox({ ...formData, id: uuid() }) // add new box with unique id
        setFormData(INITIAL_STATE); // clear form after submit
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="width">Width:</label>
                <input
                    type="text"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                    id="width"
                />
            </div>
            <div className="form-group">
                <label htmlFor="height">Height:</label>
                <input
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    id="height"
                />
            </div>
            <div className="form-group">
                <label htmlFor="backgroundColor">Background Color:</label>
                <input
                    type="text"
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                    id="backgroundColor"
                />
            </div>
            {isEmpty && <p style={{ color: 'red' }}>All fields are required</p>}
            <button>Add Box</button>


        </form>
    )
}

export default NewBoxForm;