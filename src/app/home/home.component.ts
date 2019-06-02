import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ManageRolesService } from '../manage-roles.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  roles ;
  @ViewChild(MatPaginator) paginator : MatPaginator ;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('check') check: ElementRef ;
  mydataSource:any = [];
  displayedColumns = ['id' , 'name', 'date', 'status'] ;
  
  constructor(private serv : ManageRolesService , private router : Router) { }
  ngOnInit() {
    this.serv.getRoles().subscribe((data: any) => {
      console.log(data) ;
      this.mydataSource = data  ;
      this.mydataSource = new MatTableDataSource(data) ;
      this.mydataSource.paginator = this.paginator ;
      this.mydataSource.sort = this.sort ;
    }) ; 
  }
    filterName(filterName: string) {
      filterName = filterName.trim() ;
      filterName = filterName.toLowerCase() ;
      this.mydataSource.filter = filterName ;
   }
 search(name : HTMLInputElement) {
   this.filterName(name.value) ;
 }
 restData(name : HTMLInputElement) {
  this.serv.getRoles().subscribe((data: any) => {
    console.log(data) ;
    this.mydataSource = data  ;
    this.mydataSource = new MatTableDataSource(data) ;
    this.mydataSource.paginator = this.paginator ;
    this.mydataSource.sort = this.sort ;
  }) ; 
  name.value = '' ;
 
 }
 checkAll() {
   const all = document.getElementById('all') as HTMLInputElement ;
   const box = document.getElementById('myche') as HTMLInputElement ;
   if (all.checked === true) {
    box.setAttribute('checked' ,'checked') ;
   } else {
     box.removeAttribute('checked') ;
   }
   
  
 }
 deleteRow(id) {
  this.serv.delete(id).subscribe( () => {
    this.serv.getRoles().subscribe((data: any) => {
      this.mydataSource = new MatTableDataSource(data) ;
      this.mydataSource.paginator = this.paginator ;
      this.mydataSource.sort = this.sort ;
    }) ;
  });
 }
 
 diplayOptions() {
   const checker = document.getElementById('myche') as HTMLInputElement;
   const  text = document.getElementById('options') ;
   const opt = document.getElementById('opt');
   if (checker.checked === true) {
    console.log(checker.checked) ;
    text.style.display = "block";
    
  } else  {
    text.style.display = "none";
    opt.style.display = "none";
  }

 }
 diplayOption() {
  const  text = document.getElementById('options') as HTMLDivElement ;
  const opt = document.getElementById('opt');
  if (text.style.display === 'block') {
    opt.style.display = "block";
  } else {
    opt.style.display = "none";
  }
 
 }

 addRole() {
  this.router.navigate(['/add']);
 }
  }

  

