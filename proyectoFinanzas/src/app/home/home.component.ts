import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { SharedService } from '../shared.service';
import { AddNewProjectComponent } from '../components/modals/add-new-project/add-new-project.component';
import { UpdateProjectStatusComponent } from '../components/modals/update-project-status/update-project-status.component';
import { ProyectosService } from '../shared/_services/proyectos.service';
import { PostulacionesService } from '../shared/_services/postulaciones.service';
import { PropuestasService } from '../shared/_services/propuestas.service';
import { Propuesta } from '../shared/_class/propuesta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private propuestasService:PropuestasService, private modalService: NgbModal) { }
  params = {
    page:1,
    perPage:10
  }
  total = 0;
  modalRef:NgbModalRef |undefined;
  propuestas:Propuesta[]=[];

  ngOnInit(): void {
    this.getPropuestas();
  }

  getPropuestas() {
      this.propuestasService.allPropuesta(this.params).subscribe((data:any)=>{
        if(data){
          // console.log(data)
          if(data.status !== 'success'){
            console.log("error")
          }else{
            if(data.data)
              this.propuestas = data.data;
            if(data.totalItems)
              this.total = data.totalItems;
          }
        }
      }, (error:any)=>{
        console.log(error)
      })

    
  }

  changePage(page:any){
    // console.log(page)
    this.params.page = page.page;
    this.params.perPage = page.perPage;
    this.getPropuestas();
  }

  openAddNewProjectModal(content:any): void {
    // console.log("as")
    this. modalRef = this.modalService.open(content,{centered: true, size: 'lg'});
  }

  openUpdateProjectStatusModal(): void {
    this.modalService.open(UpdateProjectStatusComponent,{centered: true, size: 'lg'});
  }

  close(){
    this.modalRef?.close();
  }
}
