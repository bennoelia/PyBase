import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  formularioCreado!: FormGroup;
  constructor(private formBuilder:FormBuilder) { 
   
  }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario()
  {
    this.formularioCreado=this.formBuilder.group({
      usuario:['x',Validators.required],
      pass:['',Validators.compose([
        Validators.required,Validators.minLength(8)
      ])
    ]
    })
  }

}
