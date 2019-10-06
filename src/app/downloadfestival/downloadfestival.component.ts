import { Component } from '@angular/core';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import { headlinersList, subsList, thirdTierBands, fourthTierBands } from './data/bands';

@Component({
  selector: 'app-downloadfestival',
  templateUrl: './downloadfestival.component.html',
  styleUrls: ['./downloadfestival.component.css']
})
export class DownloadfestivalComponent {

  public fridayHeadliner: string
  public fridaySub1: string
  public fridaySub2: string

  public fridaySecondStageHeadliner: string
  public fridaySecondStageSub: string

  public fridayThirdStageHeadliner: string

  public fridayFourthStageHeadliner: string

  public saturdayHeadliner: string
  public saturdaySub1: string
  public saturdaySub2: string

  public saturdaySecondStageHeadliner: string
  public saturdaySecondStageSub: string;

  public saturdayThirdStageHeadliner: string

  public saturdayFourthStageHeadliner: string

  public sundayHeadliner: string
  public sundaySub1: string
  public sundaySub2: string

  public sundaySecondStageHeadliner: string
  public sundaySecondStageSub: string;

  public sundayThirdStageHeadliner: string

  public sundayFourthStageHeadliner: string

  // public headliners = headlinerList
  public headliners = headlinersList
  public subs = subsList
  public midsized = thirdTierBands
  public smallsized = fourthTierBands

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

  public setFridaySecondStageHeadliner(): any {
    const v = document.getElementById("friday-second-stage-headliner");
    v.classList.length === 1 ? v.classList.add(this.fridaySecondStageHeadliner) : v.classList.replace(v.classList[1], this.fridaySecondStageHeadliner);
  }

  public setFridaySecondStageSub(): any {
    const v = document.getElementById("friday-second-stage-sub");
    v.classList.length === 1 ? v.classList.add(this.fridaySecondStageSub) : v.classList.replace(v.classList[1], this.fridaySecondStageSub);
  }

  public setFridayThirdStageHeadliner(): any {
    const v = document.getElementById("friday-third-stage-headliner");
    v.classList.length === 1 ? v.classList.add(this.fridayThirdStageHeadliner) : v.classList.replace(v.classList[1], this.fridayThirdStageHeadliner);
  }

  public setFridayFourthStageHeadliner(): any {
    const v = document.getElementById("friday-fourth-stage-headliner");
    v.classList.length === 1 ? v.classList.add(this.fridayFourthStageHeadliner) : v.classList.replace(v.classList[1], this.fridayFourthStageHeadliner);
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

  public setSaturdaySecondStageHeadliner(): any {
    const v = document.getElementById("saturday-second-stage-headliner");
    v.classList.length === 1 ? v.classList.add(this.saturdaySecondStageHeadliner) : v.classList.replace(v.classList[1], this.saturdaySecondStageHeadliner);
  }

  public setSaturdaySecondStageSub(): any {
    const v = document.getElementById("saturday-second-stage-sub");
    v.classList.length === 1 ? v.classList.add(this.saturdaySecondStageSub) : v.classList.replace(v.classList[1], this.saturdaySecondStageSub);
  }

  public setSaturdayThirdStageHeadliner(): any {
    const v = document.getElementById("saturday-third-stage-headliner");
    v.classList.length === 1 ? v.classList.add(this.saturdayThirdStageHeadliner) : v.classList.replace(v.classList[1], this.saturdayThirdStageHeadliner);
  }

  public setSaturdayFourthStageHeadliner(): any {
    const v = document.getElementById("saturday-fourth-stage-headliner");
    v.classList.length === 1 ? v.classList.add(this.saturdayFourthStageHeadliner) : v.classList.replace(v.classList[1], this.saturdayFourthStageHeadliner);
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

  public setSundaySecondStageHeadliner(): any {
    const v = document.getElementById("sunday-second-stage-headliner");
    v.classList.length === 1 ? v.classList.add(this.sundaySecondStageHeadliner) : v.classList.replace(v.classList[1], this.sundaySecondStageHeadliner);
  }

  public setSundaySecondStageSub(): any {
    const v = document.getElementById("sunday-second-stage-sub");
    v.classList.length === 1 ? v.classList.add(this.sundaySecondStageSub) : v.classList.replace(v.classList[1], this.sundaySecondStageSub);
  }

  public setSundayThirdStageHeadliner(): any {
    const v = document.getElementById("sunday-third-stage-headliner");
    v.classList.length === 1 ? v.classList.add(this.sundayThirdStageHeadliner) : v.classList.replace(v.classList[1], this.sundayThirdStageHeadliner);
  }

  public setSundayFourthStageHeadliner(): any {
    const v = document.getElementById("sunday-fourth-stage-headliner");
    v.classList.length === 1 ? v.classList.add(this.sundayFourthStageHeadliner) : v.classList.replace(v.classList[1], this.sundayFourthStageHeadliner);
  }

  public hello(): any {
    console.log('hi')
  }
  /*
    public print(): any {
      const filename = 'ThisIsYourPDFFilename.pdf';

      html2canvas(document.querySelector('#testz')).then(canvas => {
        let pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 403, 298); // 1200 × 1600
        pdf.save(filename);
      });
    }
  */
  // Variant
  // This one lets you improve the PDF sharpness by scaling up the HTML node tree to render as an image before getting pasted on the PDF.
  public printQ(quality = 3): any {
    const filename = 'dl2020lineup.pdf';
//210mm x 297mm
    html2canvas(document.querySelector('#printposter'),
      { scale: quality }
    ).then(canvas => {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [842, 632]
      })//'p', 'px'); // px or in (inch?) 'a4';
      // let width = pdf.internal.pageSize.getWidth();
     // debugger;
      let divWidth = pdf.internal.pageSize.getWidth();
      let divHeight = pdf.internal.pageSize.getHeight();
      // debugger;
      console.log(divWidth)
      // console.log(divWidth   // document.querySelector('#printposter').offsetWidth
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 0, 632)//875, 635); // 1200 × 1600;
      // pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
      pdf.save(filename);
    });
  }

}
