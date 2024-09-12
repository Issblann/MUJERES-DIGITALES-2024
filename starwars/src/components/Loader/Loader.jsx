import React from 'react';
import './Loader.css'; // Importamos los estilos del loader

function Loader() {
    return (
        <div className="loader-container">
            <div className="loader"></div>
            <p>Loading...</p>
        </div>
    );
}

export default Loader;
