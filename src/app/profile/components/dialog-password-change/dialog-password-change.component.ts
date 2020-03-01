import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-password-change',
  templateUrl: './dialog-password-change.component.html',
  styleUrls: ['./dialog-password-change.component.css']
})
export class DialogPasswordChangeComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogPasswordChangeComponent>) {}

  close()
  {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
