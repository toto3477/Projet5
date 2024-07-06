// src/components/Collapse.js
import React, { useState } from 'react';


const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${isOpen ? 'open' : ''}`}>
            <div className="collapse-header" >
            <button className={`collapse-button ${isOpen ? 'active' : ''}`}>{title}
            <span onClick={toggleCollapse} className="material-symbols-outlined">
            {isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_up'}
            </span>
                </button>
            </div>
            {isOpen && <div className="collapse-content">{children}</div>}
        </div>
    );
};

export default Collapse;
