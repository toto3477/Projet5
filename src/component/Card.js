import React from 'react';

const Card = ({ annonce }) => {
    if (!annonce) return <redirect to="/Erreur" />

    return (
<div className='card'>
            <div className='cardimage'>
                <img src={annonce.cover || annonce.pictures[0]} alt={annonce.title} />
            </div>
            <div className='cardcontent'>
                <div className='cardheader'>
                    <div className='cardtitle'>
                        <h2>{annonce.title}</h2>
                        <p>{annonce.location}</p>
                        <div className='cardtags'>
                            {annonce.tags.map((tag, index) => (
                                <span key={index} className='cardtag'>{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className='cardhost'>
                        <div className='host'>
                            <p>{annonce.host.name}</p>
                            <img src={annonce.host.picture} alt={annonce.host.name} className='cardhost-picture' />
                        </div>
                        <div className='cardrating'>
                            {[...Array(5)].map((_, index) => (
                                <span key={index} className={`star ${index < annonce.rating ? 'filled' : ''}`}>★</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='carddescription'>
                    <p>{annonce.description}</p>
                </div>
                {annonce.equipments && Array.isArray(annonce.equipments) ? (
                    <div className='cardequipments'>
                        <h3>Équipements</h3>
                        <ul>
                            {annonce.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>Pas d'équipements disponibles</p>
                )}
            </div>
        </div>
    );
};

export default Card;
