import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public formReactive: FormGroup;
  public users;

  constructor(
    private fb: FormBuilder,
    private serv: ApiService
  ) {
    this.createFormCnb();
  }

  ngOnInit() {

  }



  createFormCnb() {
    this.formReactive = this.fb.group({
      id: [''],
      name: [''],
      email: ['', Validators.required],
      phone:  ['', Validators.compose([
        Validators.pattern('[0-9]{1,2}'),
        Validators.required
      ])],
      photoName: ['', Validators.required]

    });
  }

  setUser() {

    this.serv.name = this.formReactive.get('name').get('firstname').value + ' ' + this.formReactive.get('name').get('lastname').value;

    // let url = 'http://cruduser.us-east-2.elasticbeanstalk.com/user';
    // let body = this.formReactive.value;
    // this.serv.requestHttp('POST', url, body, null).subscribe(
    //   response => {
    //     console.log('response');
    //     console.log(response);


    //   },error => {
    //     console.log('error');
    //     console.log(error);
    //   });
  }

  getUsers() {
    let url = 'http://cruduser.us-east-2.elasticbeanstalk.com/user/' + this.formReactive.get('id').value;
    this.serv.requestHttp('GET', url, null, null).subscribe(
      response => {
        console.log('response');
        console.log(response);
        //this.users = response.body;
        if(response.body.message == undefined){
          this.users = response.body;
        } else {
          this.users = [response.body.response]
        }
      }, error => {
        console.log('error');
        console.log(error);
      });
      //this.users = response.body;
  }
}
