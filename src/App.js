import React from 'react';
import './App.css';

import Title from './components/title/title';
import InputCita from './components/inputCita/inputCita';
import ContainerCita from './components/containerCita/containerCita';
import BtnAgregarCita from './components/btnAgregarCita/btnAgregarCita';

import Cita from './models/Cita'

const citas = [];
let cita = new Cita('Nina', 'Martin', '2021-08-05', '08:20', 'Le duele la pierna');
citas.push(cita);
cita = new Cita('Sifon', 'Flecha', '2023-08-05', '09:24', 'Duerme mucho');
citas.push(cita);
cita = new Cita('Floki', 'Ari', '2023-08-05', '16:15', 'No está comiendo');
citas.push(cita);

function App() {
  return (
    <>
        <header>
            <Title title="Administrador de Pacientes" h1={true} />
        </header>

        <body>
        <div className='row'>
            <div className="one-half column">
                <Title title="Crear mi cita" h1={false} />
                <form>
                    <InputCita type="text" placeholder="Nombre Mascota" name="mascota" label="Nombre Mascota"/>
                    <InputCita type="text" placeholder="Nombre dueño de la mascota" name="dueño" label="Nombre Dueño" />
                    <InputCita type="date" name="fecha" label="Fecha" />
                    <InputCita type="time" name="hora" label="Hora" />
                    <InputCita type="textbox" name="sintomas" label="Sintomas" />
                    <BtnAgregarCita />
                </form>
            </div>
            <div className="one-half column">
                <Title title="Administra tus citas" h1={false} />
                {citas.map((cita, index) => {
                    return <ContainerCita key={index} valueMascota={cita.mascota} valueDueño={cita.dueño} valueFecha={cita.fecha} valueHora={cita.hora} valueSintomas={cita.sintomas} />
                })}
            </div>
        </div>
        </body>
    </>
  );
}

export default App;