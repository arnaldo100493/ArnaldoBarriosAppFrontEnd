import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  persona: Persona = new Persona();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
  
  }

  guardar(persona: Persona) {
    this.service.createPersona(persona).subscribe(data => {
      alert("Se agregó con éxito...!!!");
      this.router.navigate(["listar"]);
    });
  }

}
