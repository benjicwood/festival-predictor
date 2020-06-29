import { Component } from '@angular/core'

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

import { headlinersList, subsList, subsListExtended, subsListSecondStage, thirdStageList, fourthStageList } from './data/bands'

@Component({
  selector: 'app-downloadfestival',
  templateUrl: './downloadfestival.component.html',
  styleUrls: ['./downloadfestival.component.scss']
})

export class DownloadfestivalComponent {

  public headliners = headlinersList
  public subs = subsList;
  public subsExtended = subsListExtended
  public subsListSecondStage = subsListSecondStage
  public thirdStage = thirdStageList
  public fourthStage = fourthStageList

  public fridayHeadliner: string
  public saturdayHeadliner: string
  public sundayHeadliner: string
  public fridaySub1: string
  public saturdaySub1: string
  public sundaySub1: string
  public fridaySub2: string
  public saturdaySub2: string
  public sundaySub2: string
  public fridaySecondStageHeadliner: string
  public saturdaySecondStageHeadliner: string
  public sundaySecondStageHeadliner: string
  public fridaySecondStageSub: string
  public saturdaySecondStageSub: string
  public sundaySecondStageSub: string
  public fridayThirdStageHeadliner: string
  public saturdayThirdStageHeadliner: string
  public sundayThirdStageHeadliner: string
  public fridayFourthStageHeadliner: string
  public saturdayFourthStageHeadliner: string
  public sundayFourthStageHeadliner: string

  public posterDesign: string = 'png';

  public setLogo(position: string, bandname: string): any {
    const getMatchingElement = document.getElementById(position)

    getMatchingElement.classList.length === 1 ? getMatchingElement.classList.add(bandname) : getMatchingElement.classList.replace(getMatchingElement.classList[1], bandname)
  }

  public choosePoster(): any {
    this.posterDesign === 'png' ? this.posterDesign = 'jpg' : this.posterDesign = 'png'
    console.log(this.posterDesign);
  }

  // improve the PDF sharpness by scaling up the HTML node tree to render as an image before getting pasted on the PDF
  public printQ(quality = 3): any { // quality between 0 and 4
    // console.log(this.posterDesign)
    // return;
    const filename = 'dl2020lineup.pdf'

    const variableWidth = this.posterDesign === 'png' ? 632 : 569;

    html2canvas(document.querySelector('#printposter'),
      { scale: quality }
    ).then(canvas => {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [842, variableWidth]
      }) //'p', 'px'); // px or in (inch?) 'a4'

      let divWidth = pdf.internal.pageSize.getWidth()
      let divHeight = pdf.internal.pageSize.getHeight()

      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 0, 632)
      pdf.save(filename)
    })
  }
}

