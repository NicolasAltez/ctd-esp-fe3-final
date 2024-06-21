import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';
import { fetchDentistById } from '../services/api.js';

const DentistDetail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const getDentist = async () => {
      try {
        const data = await fetchDentistById(id);
        setDentist(data);
      } catch (error) {
        console.error('Error fetching dentist data:', error);
      }
    };

    getDentist();
  }, [id]);

  if (!dentist) {
    return <p>Loading...</p>;
  }

  return (
    <div className={`dentist-detail-container ${state.theme === 'dark' ? 'dark' : ''}`}>
      <h1 className={state.theme === 'dark' ? 'dark' : ''}>Detalle Del Dentista</h1>
      <div className={`dentist-detail ${state.theme === 'dark' ? 'dark' : ''}`}>
        <img src="../images/doctor.jpg" alt={`${dentist.name}`} className="card-img" />
        <h2>{dentist.name}</h2>
        <p><strong>Email:</strong> {dentist.email}</p>
        <p><strong>Telefono:</strong> {dentist.phone}</p>
        <Link to="/" className="back-button">Volver al inicio</Link>
      </div>
    </div>
  );
};

export default DentistDetail;
