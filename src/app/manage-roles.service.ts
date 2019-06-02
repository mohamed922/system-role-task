import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageRolesService {

  constructor(private  http: HttpClient ) { }

  url = 'http://localhost:3000/roles' ;

 getRoles() {
  return  this.http.get(this.url);

 }
 getOneRole(id) {
   return this.http.get('http://localhost:3000/roles/' + id) ;
 }
 postRole(role) {
   return this.http.post(this.url, role) ;
 }
delete(id) {
  return this.http.delete('http://localhost:3000/roles/' + id);
}
update(id , newRole) {
  return this.http.put('http://localhost:3000/roles/' + id , newRole );
}

}
