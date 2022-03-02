import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {
// se importa el dialogref para llamar 
  constructor( private dialogRef: MatDialogRef<ConfirmarComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:string) { }



  
  ngOnInit(): void {
  }
  cerrar(){
    this.dialogRef.close();

  }

  borrar(){
    this.dialogRef.close(true);

  }

}
