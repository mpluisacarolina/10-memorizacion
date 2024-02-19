import React, { useState } from 'react'

export const Tareas = () => {

    const [tareas, setTareas] = useState([]);

    const guardarTareas = e => {
        e.preventDefault();

        let tareas_actualizadas = [...tareas, e.target.descripcion.value];
        setTareas(tareas_actualizadas);
    }



    const borrarTarea = id => {
        let nuevas_tareas = tareas.filter ((tarea, indice) => indice !== id);
        
        setTareas(nuevas_tareas);   
    }

    return (
        <div className="tareasContainer">
            <h1>Mis Tareas</h1>
            <form onSubmit={guardarTareas}>
                <input type="text" name="descripcion" placeholder="Describe la tarea" ></input>
                <input type="submit" value="Guardar" />
            </form>
            <h3>Lista de Tareas</h3>
            {
                tareas.map((tarea, indice) => {
                    return (
                        <li key={indice}>
                            {tarea}
                            &nbsp;
                            <button onClick={() => borrarTarea (indice)}>X</button>
                        </li>
                    )
                })
            }
        </div>
    )
}
