import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ess',
  templateUrl: './ess.component.html',
  styleUrls: ['./ess.component.scss']
})
export class EssComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  
}
