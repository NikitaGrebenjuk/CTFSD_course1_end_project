import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-meetings',
  templateUrl: './create-meetings.component.html',
  styleUrls: ['./create-meetings.component.css']
})
export class CreateMeetingsComponent implements OnInit {

  meetingCreationForm;

  constructor(private fb: FormBuilder) {
    this.meetingCreationForm = fb.group(
      {
        day : [""],
        starttime :[""],
        endtime: [""],
        email:[""]
      }
    );


   }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.meetingCreationForm.value);
  }
}
