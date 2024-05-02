import React, { useState } from 'react';
import './App.css';
import CitaContext from './CitaContext';

import Title from './components/title/title';
import ContainerCita from './components/containerCita/containerCita';
import Formulario from './components/formulario/formulario';

import Cita from './models/Cita'

function App() {
    const [citas, setCitas] = useState([
        new Cita('Nina', 'Martin', '2021-08-05', '08:20', 'Le duele la pierna'),
        new Cita('Sifon', 'Flecha', '2023-08-05', '09:24', 'Duerme mucho'),
        new Cita('Floki', 'Ari', '2023-08-05', '16:15', 'No está comiendo')
    ]);
  return (
    <CitaContext.Provider value={{ citas, setCitas }}>
        <header>
            <Title title="Administrador de Pacientes" h1={true} />
        </header>

        <body>
        <div className='row'>
            <div className="one-half column">
                <Title title="Crear mi cita" h1={false} />
                <Formulario />
            </div>
            <div className="one-half column">
                <Title title="Administra tus citas" h1={false} />
                {citas.map((cita, index) => {
                    return <ContainerCita key={index} index={index} valueMascota={cita.mascota} valueDueño={cita.dueño} valueFecha={cita.fecha} valueHora={cita.hora} valueSintomas={cita.sintomas} />
                })}
            </div>
        </div>
        </body>
    </CitaContext.Provider>
  );
}

export default App;