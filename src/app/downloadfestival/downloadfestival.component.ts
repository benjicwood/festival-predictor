import { Component } from '@angular/core';

@Component({
  selector: 'app-downloadfestival',
  templateUrl: './downloadfestival.component.html',
  styleUrls: ['./downloadfestival.component.css']
})
export class DownloadfestivalComponent {

  public fridayHeadliner: string;
  public saturdayHeadliner: string;
  public sundayHeadliner: string;

  public setFridayHeadliner(): any {
    const v = document.getElementById("friday-headliner"); 
    // debugger;
    v.classList.length === 1 ? v.classList.add(this.fridayHeadliner) : v.classList.replace(v.classList[1], this.fridayHeadliner);
  }

  public setSaturdayHeadliner(): any {
    const v = document.getElementById("saturday-headliner"); 
    // debugger;
    v.classList.length === 1 ? v.classList.add(this.saturdayHeadliner) : v.classList.replace(v.classList[1], this.saturdayHeadliner);
  }
 
  public setSundayHeadliner(): any {
    const v = document.getElementById("sunday-headliner"); 
    // debugger;
    v.classList.length === 1 ? v.classList.add(this.sundayHeadliner) : v.classList.replace(v.classList[1], this.sundayHeadliner);
  }

}
