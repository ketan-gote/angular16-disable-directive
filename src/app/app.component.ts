import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-disabled-directive';

  form: FormGroup;
  disable = false;
  data : any;
  constructor() {
    this.form = new FormGroup({
      demo: new FormControl('Disable Directive  Demo', null),
    });
  }

  ngOnInit(): void {
   
    setTimeout(()=>{
      this.onClick('disable');
    },500);
  }

  onClick(event: string){
    if(event === 'disable')
      this.disable = true;
    else
      this.disable = false;
  }

  submit(){

    this.data = this.form.value;
  }
}
