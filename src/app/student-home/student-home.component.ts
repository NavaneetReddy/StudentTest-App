import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/Router';

@Component({
  selector: 'app-student-home',
  template: `
<div>am in home</div>
<div class="float-right">
<button class="btn btn-primary" (click)=handleClick()>CustomerPage</button>
</div>

  `,
  styles: []
})
export class StudentHomeComponent implements OnInit {

 
  constructor(private router:Router) { }

  ngOnInit() {
    }

  handleClick(){
    this.router.navigate(['/app']);
  }

}
