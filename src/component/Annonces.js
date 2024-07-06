import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Annonces = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('../annonces.json')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                setError(err);
                <redirect to="/Erreur" />
            });
    }, []);

    const handleClick = (id) => {
        navigate(`/DescriptionCard/${id}`);
    };

    if (error) {
        return <redirect to="/Erreur" />;
    }

    return (
        <div className='annonces'>
            <div>
                {data.length > 0 ? (
                    data.map((annonce, index) => (
                        <div className='bouton' key={index} onClick={() => handleClick(annonce.id)}>
                            <article className='annonceCard'>
                                <img src={annonce.cover || annonce.picture} alt={annonce.title} />
                                <h2>{annonce.title}</h2>
                            </article>
                        </div>
                    ))
                ) : (
                    <p>Chargement...</p>
                )}
            </div>
        </div>
    );
};

export default Annonces;
