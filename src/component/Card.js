import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons';
import Collapse from "./Collapse"
import Slideshow from './Slideshow';
import "../assets/style/card.scss";

const Card = ({ annonce }) => {
    if (!annonce) return <redirect to="/Erreur" />

    return (
        <div className='card'>
            <div className='cardimage'>
                <Slideshow pictures={annonce.pictures} />
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
                                <FontAwesomeIcon
                                key={index}
                                icon={index < annonce.rating ? fasFaStar : fasFaStar}
                                className={index < annonce.rating ? 'fa-star filled' : 'fa-star'}
                            />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='cardcollapse'>
                    <Collapse title="Description" className="collapsedescription">
                    <p>{annonce.description}</p>
                    </Collapse>
                    <Collapse title="Equipements">
                        <ul>
                            {annonce.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </Collapse>
                </div>
            </div>
        </div>
    );
};

export default Card;
