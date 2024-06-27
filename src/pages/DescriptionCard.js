// src/pages/DescriptionCard.js
import React, { useEffect, useState } from 'react';
import { useParams, redirect } from 'react-router-dom';
import axios from 'axios';
import Header from '../component/Header';
import Card from '../component/Card';
import Footer from '../component/Footer';
import Erreur from './Erreur'

const DescriptionCard = () => {
    const { id } = useParams();
    const [annonce, setAnnonce] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
            .get('../annonces.json')
            .then((res) => {
                const foundAnnonce = res.data.find(a => a.id === id);
                if (foundAnnonce) {
                    setAnnonce(foundAnnonce);
                } else {
                    setError(true);
                }
            })
            .catch((err) => {
                setError(true);
            });
    }, [id]);

    if (error) {
        return <Erreur />
    }
    
    if (!annonce) {
        return <Erreur />
    }

    return (
        <div>
            <Header />
            <Card annonce={annonce} />
            <Footer />
        </div>
    );
};

export default DescriptionCard;
