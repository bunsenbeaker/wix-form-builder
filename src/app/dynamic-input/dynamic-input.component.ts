import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.css']
})
export class DynamicInputComponent implements OnInit {

  @Input() type: string;

  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
