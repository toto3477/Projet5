// src/components/Collapse.js
import React, { useState } from 'react';


const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`collapse ${isOpen ? 'open' : ''}`}>
            <div className="collapse-header" onClick={toggleCollapse}>
                <button className="collapse-button">{title}
                    <span>{isOpen ? 'Λ' : 'Λ'}</span>
                </button>
            </div>
            {isOpen && <div className="collapse-content">{children}</div>}
        </div>
    );
};

export default Collapse;
