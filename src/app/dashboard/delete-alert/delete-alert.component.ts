import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-alert',
  standalone: true,
  imports: [],
  templateUrl: './delete-alert.component.html',
  styleUrl: './delete-alert.component.scss'
})
export class DeleteAlertComponent {
  constructor(
    private popup : NgbActiveModal
  ){

  }
  closePopup(status : any){
    this.popup.close(status);
  }
}
