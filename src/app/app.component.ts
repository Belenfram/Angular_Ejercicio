import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'parcial1';

  //propiedades
  equipo = {
    id: 0,
    nombre: '',
    region: '',
    nojugadores: 0,
    manager: '',
  };

  //Arreglo de equipos
  equipos = [
    {id: 2025001, nombre: 'Sentinels', region: 'Norteamerica', nojugadores: 5, manager: 'David Joslin' },
    
  ];

  //función que determina si hay equipos en el arreglo
  hayEquipos(){
    return this.equipos.length > 0;
  }

  //función que agrega equipos al arreglo
  agregarEquipo(){
    if (this.equipo.id == 0) {
      alert('El id del equipo debe ser diferente de 0');
      return;
    }
    for (let i = 0; i < this.equipos.length; i++) {
      if (this.equipo.id == this.equipos[i].id) {
        alert('Ya existe un equipo con ese ID');
        return;
      }
    }
    this.equipos.push({
      id: this.equipo.id,
      nombre: this.equipo.nombre,
      region: this.equipo.region,
      nojugadores: this.equipo.nojugadores,
      manager: this.equipo.manager
    });
    this.equipo.id = 0;
    this.equipo.nombre = '';
    this.equipo.region = '';
    this.equipo.nojugadores = 0;
    this.equipo.manager = '';
  }

  //método para seleccionar un equipo existente
  seleccionarEquipo(equipoSeleccionado: {id:number; nombre:string; region:string; nojugadores:number; manager:string;}){
    this.equipo.id = equipoSeleccionado.id;
    this.equipo.nombre = equipoSeleccionado.nombre;
    this.equipo.region = equipoSeleccionado.region;
    this.equipo.nojugadores = equipoSeleccionado.nojugadores;
    this.equipo.manager = equipoSeleccionado.manager;
  }

  //función para modificar un equipo (el equipo seleccionado)
  modificarEquipo(){
    for (let i = 0; i < this.equipos.length; i++) {
      if (this.equipo.id == this.equipos[i].id) {
        this.equipos[i].nombre = this.equipo.nombre;
        this.equipos[i].region = this.equipo.region;
        this.equipos[i].nojugadores = this.equipo.nojugadores;
        this.equipos[i].manager = this.equipo.manager;

        this.equipo.id = 0;
        this.equipo.nombre = '';
        this.equipo.region = '';
        this.equipo.nojugadores = 0;
        this.equipo.manager = '';
        return;
      }
    }
    alert('No existe ID');
  }

  //Función para eliminar un producto
  eliminarEquipo(id: number){
    for (let i = 0; i < this.equipos.length; i++) {
      if (id == this.equipos[i].id) {
        this.equipos.splice(i, 1);
        return;
      }
    }
  }

}
