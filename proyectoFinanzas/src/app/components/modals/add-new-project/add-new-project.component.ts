import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from  '@angular/forms';
import { Propuesta } from 'src/app/shared/_class/propuesta';
import { PropuestasService } from 'src/app/shared/_services/propuestas.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.css']
})
export class AddNewProjectComponent implements OnInit {

  public showNewProjectForm: boolean = false;
  public newProjectFormUploaded: boolean = false;
  public showEconomicEvaluationForm: boolean = false;
  public newEconomicFormUploaded: boolean = false;
  public showSuccessMessage: boolean = false;
  public totalMonths: string[] = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public newProjectForm: FormGroup;
  @Output() cerrar  = new EventEmitter();
  @Output() refresh = new EventEmitter();
  propuesta: Propuesta = new Propuesta();
  tipos = [
    { id: 1, name:'tipo 1' },
    { id: 2, name:'tipo 2' },
    { id: 3, name:'tipo 3' },
    { id: 4, name:'tipo 4' },
  ]


  constructor( private propuestaService:PropuestasService, public datepipe: DatePipe ) {
    this.newProjectForm = Propuesta.formControl(this.propuesta);
  }

  ngOnInit() {
  }

  setNewProjectForm(): void {
    this.showNewProjectForm = true;
    this.showEconomicEvaluationForm = false;
  };

  setEconomicEvaluationForm(): void {
    this.showNewProjectForm = false;
    this.showEconomicEvaluationForm = true;
  };

  completeNewProjectForm(): void {
    this.showNewProjectForm = false;
    this.newProjectFormUploaded = true;
    this.propuesta = this.newProjectForm.value;
    this.propuesta.FechaVenta = `${this.newProjectForm.value.FechaVenta.year}-${this.newProjectForm.value.FechaVenta.month}-${this.newProjectForm.value.FechaVenta.day}`;
    this.guardarPropuesta(this.propuesta);
  }

  completeEconomicEvaluationForm(): void {
    this.newEconomicFormUploaded = true;
    this.showEconomicEvaluationForm = false;
    console.log("saving p.economic...")
  }

  showModalMenu(): void {
    this.showNewProjectForm = false;
    this.showEconomicEvaluationForm = false;
  };

  showSuccessMessageModal(): void {
    this.showNewProjectForm = false;
    this.showEconomicEvaluationForm = false;
    this.showSuccessMessage = true;
  }
  guardarPropuesta( propuesta:Propuesta ){
    this.propuestaService.addPropuesta(propuesta).subscribe(data=>{
      this.refresh.emit()
      console.log(data);
    }, (e)=>{
      console.log(e)
    })
  }
}
