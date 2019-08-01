import { Component } from '@angular/core';

@Component({
  selector: 'app-downloadfestival',
  templateUrl: './downloadfestival.component.html',
  styleUrls: ['./downloadfestival.component.css']
})
export class DownloadfestivalComponent {

  public fridayHeadliner: string;
  public fridaySub1: string;
  public fridaySub2: string;

  public saturdayHeadliner: string;
  public saturdaySub1: string;
  public saturdaySub2: string;

  public sundayHeadliner: string;
  public sundaySub1: string;
  public sundaySub2: string;


  // Friday
  public setFridayHeadliner(): any {
    const v = document.getElementById("friday-headliner");
    v.classList.length === 1 ? v.classList.add(this.fridayHeadliner) : v.classList.replace(v.classList[1], this.fridayHeadliner);
  }

  public setFridaySub1(): any {
    const v = document.getElementById("friday-sub1");
    v.classList.length === 1 ? v.classList.add(this.fridaySub1) : v.classList.replace(v.classList[1], this.fridaySub1);
  }

  public setFridaySub2(): any {
    const v = document.getElementById("friday-sub2");
    v.classList.length === 1 ? v.classList.add(this.fridaySub2) : v.classList.replace(v.classList[1], this.fridaySub2);
  }


  // Saturday
  public setSaturdayHeadliner(): any {
    const v = document.getElementById("saturday-headliner");
    v.classList.length === 1 ? v.classList.add(this.saturdayHeadliner) : v.classList.replace(v.classList[1], this.saturdayHeadliner);
  }

  public setSaturdaySub1(): any {
    const v = document.getElementById("saturday-sub1");
    v.classList.length === 1 ? v.classList.add(this.saturdaySub1) : v.classList.replace(v.classList[1], this.saturdaySub1);
  }

  public setSaturdaySub2(): any {
    const v = document.getElementById("saturday-sub2");
    v.classList.length === 1 ? v.classList.add(this.saturdaySub2) : v.classList.replace(v.classList[1], this.saturdaySub2);
  }


  // Sunday
  public setSundayHeadliner(): any {
    const v = document.getElementById("sunday-headliner");
    v.classList.length === 1 ? v.classList.add(this.sundayHeadliner) : v.classList.replace(v.classList[1], this.sundayHeadliner);
  }

  public setSundaySub1(): any {
    const v = document.getElementById("sunday-sub1");
    v.classList.length === 1 ? v.classList.add(this.sundaySub1) : v.classList.replace(v.classList[1], this.sundaySub1);
  }

  public setSundaySub2(): any {
    const v = document.getElementById("sunday-sub2");
    v.classList.length === 1 ? v.classList.add(this.sundaySub2) : v.classList.replace(v.classList[1], this.sundaySub2);
  }

}
