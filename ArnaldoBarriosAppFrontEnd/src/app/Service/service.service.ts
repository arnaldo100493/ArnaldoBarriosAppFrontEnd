import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  persona: Persona;
  constructor(private http: HttpClient) { }

  url = 'http://localhost:8082/EjemploJavaSpringBackEnd/personas';


  getPersonas() {
    return this.http.get<Persona[]>(this.url);
  }

  createPersona(persona: Persona) {
    return this.http.post<Persona>(this.url, persona);
  }

  getPersonaById(id: number) {
    return this.http.get<Persona>(this.url + "/" + id);
  }

  updatePersona(persona: Persona) {
    return this.http.put<Persona>(this.url + "/" + persona.idPersona, persona);
  }

  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.url + "/" + persona.idPersona);
  }

}
