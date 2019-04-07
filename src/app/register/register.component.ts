import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerValidation: FormGroup;
  auto_gen = true;
  leadOptions = [];
  managerOptions = [];
  toggleVisible = new FormControl(true);
  public emp_id = '';

  constructor() { }

  ngOnInit() {
    this.registerValidation = new FormGroup({
      emp_id: new FormControl({disabled: this.auto_gen}),
      hint_text: new FormControl(),
      auto_generate: new FormControl(),
      emp_name: new FormControl(),
      emp_mail_id: new FormControl(),
      emp_mobile_no: new FormControl(),
      role_control:  new FormControl(),
      lead_control: new FormControl(),
      manager_control: new FormControl(),
      date_of_joining: new FormControl()
    });
    this.leadOptions = ['Lead 1','Lead 2','Lead 3'];
    this.managerOptions = [
      {key: 'Manager 1', value: 'Manager 1'},
      {key: 'Manager 2', value: 'Manager 2'},
      {key: 'Manager 3', value: 'Manager 3'},
    ];
  }

  toggleVisibility($event){
    if(this.auto_gen){
      this.auto_gen = false;
      this.registerValidation.get("emp_id").enable();
    }else{
      this.emp_id = '';
      this.auto_gen = true;
      this.registerValidation.get("emp_id").disable();
    }
  }

  onClear(){
    this.emp_id = '';
    this.auto_gen = true;
    this.registerValidation = new FormGroup({
      emp_id: new FormControl({value: '', disabled: this.auto_gen}),
      hint_text: new FormControl(),
      auto_generate: new FormControl(),
      emp_name: new FormControl(),
      emp_mail_id: new FormControl(),
      emp_mobile_no: new FormControl(),
      role_control:  new FormControl(),
      lead_control: new FormControl(),
      manager_control: new FormControl(),
      date_of_joining: new FormControl()
    });
  }

  ngDoCheck(){
    if(!this.auto_gen){
      this.registerValidation.get("emp_id").enable();
    }else{
      this.registerValidation.get("emp_id").disable();
    }
  }

}
