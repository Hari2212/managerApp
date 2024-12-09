import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cant-delete-alert',
  standalone: true,
  imports: [],
  templateUrl: './cant-delete-alert.component.html',
  styleUrl: './cant-delete-alert.component.scss'
})
export class CantDeleteAlertComponent {
  @Input() content: any;
  constructor(
    private model : NgbActiveModal
  ){

  }
  closePopup(type: any) {
    this.model.close(type);
  }
}
