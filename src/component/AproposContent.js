import React, { useState } from 'react';

const AproposContent = () => {
    const [visibleSections, setVisibleSections] = useState([]);

    const toggleSection = (section) => {
        setVisibleSections(prevSections =>
            prevSections.includes(section)
                ? prevSections.filter(sec => sec !== section)
                : [...prevSections, section]
        );
    };

    return (
        <div className='aproposContent'>
            {['Fiabilité', 'Respect', 'Service', 'Sécurité'].map((title, index) => (
                <div className={`section ${visibleSections.includes(title.toLowerCase()) ? 'active' : ''}`} key={index}>
                    <button onClick={() => toggleSection(title.toLowerCase())}>
                        {title} <span>{visibleSections.includes(title.toLowerCase()) ? 'Λ' : 'Λ'}</span>
                    </button>
                    {visibleSections.includes(title.toLowerCase()) && (
                        <p>{getContent(title)}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

const getContent = (title) => {
    switch (title) {
        case 'Fiabilité':
            return 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.';
        case 'Respect':
            return 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
        case 'Service':
            return "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
        case 'Sécurité':
            return 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.';
        default:
            return '';
    }
};

export default AproposContent;
