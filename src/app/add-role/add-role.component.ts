import { Component, OnInit } from '@angular/core';
import { ManageRolesService } from '../manage-roles.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from "rxjs/operators";
@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
features =  [ { value :'feature-1'},{value :'feature-2'} , {value:'feature-3'}] ;
pages = [{
  number: 1 ,
  permisions : ['per1','per2','per3']
}
 ,
 {
   number: 2 ,
    permisions : ['per4','per5','per6']
} ,
{
  number: 3 ,
  permisions : ['per7','per8','per9']} ,
  {
    number: 4 ,
     permisions : ['per10','per11','per12']
    } ] ;

  name ='';
  date = '';
  status = '' ;
  role: Object = {};
  Id: string;
  
  constructor(private serv : ManageRolesService , private router: Router , private  route: ActivatedRoute) {

   
   }

  ngOnInit() {
    this.Id = this.route.snapshot.paramMap.get('id') ;
    this.serv.getOneRole(this.Id).pipe(take(1)).subscribe( res => {
      console.log(res) ;
      this.role  = res  ;
    });
  }
postRole(id , role) {
  if (id) {
  this.serv.update(this.Id , role).subscribe() ;
  window.alert('Data updated Sucessfully !!') ;
  } else {
    this.serv.postRole(role).subscribe()   ;
    window.alert('Data Saved Sucessfully !!') ;
  }
  
}
details(pageNumber) {
document.getElementById('permisions').innerHTML = '' ;
for (const page of this.pages) {
  if ( page.number === pageNumber) {
// tslint:disable-next-line:prefer-for-of
for ( let i = 0 ; i < page.permisions.length ; i++ ) {
      document.getElementById('permisions').innerHTML += ' <h1>' + page.permisions[i] + ' </h1> ' ;
    }
  }
}
}
backHome() {

this.router.navigate(['']) ;
}

}
