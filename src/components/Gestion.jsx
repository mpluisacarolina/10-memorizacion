import React, { useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [nombre, setNombre] = useState("");

    const asignarGestor = e => {
        setNombre(e.target.value);
    }

    return (
        <div>
            <h1> Nombre del Gestor: {nombre} </h1>
            <input type="text" onChange={asignarGestor} placeholder="Ingresa tu nombre de gestor: "/>
            <h2> Listado de Empleados: </h2>
            <p> Los usuarios que son gestionados por {nombre} vienen de jsonplaceholder... </p>
            <Empleados />
        </div>
    )
}
