import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  clientCreationForm;

  constructor(private fb: FormBuilder) {
    this.clientCreationForm = this.fb.group(
      {
        firstname : [""],
        surname : [""],
        email : [""],
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.clientCreationForm.value);
  }
}
