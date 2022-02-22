import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-project-status',
  templateUrl: './update-project-status.component.html',
  styleUrls: ['./update-project-status.component.css']
})
export class UpdateProjectStatusComponent implements OnInit {

  constructor( public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
