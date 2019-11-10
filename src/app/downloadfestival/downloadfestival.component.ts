import { Component } from '@angular/core'

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

import { headlinersList, subsList, thirdTierBands, fourthTierBands } from './data/bands'

@Component({
  selector: 'app-downloadfestival',
  templateUrl: './downloadfestival.component.html',
  styleUrls: ['./downloadfestival.component.css']
})

export class DownloadfestivalComponent {

  public headliners = headlinersList
  public subs = subsList
  public midsized = thirdTierBands
  public smallsized = fourthTierBands

  public setLogo(position: string, bandname: any): any {
    const getMatchingElement = document.getElementById(position)
    getMatchingElement.classList.length === 1 ? getMatchingElement.classList.add(bandname) : getMatchingElement.classList.replace(getMatchingElement.classList[1], bandname)
    event.target["selectedIndex"] = 0
  }

  // improve the PDF sharpness by scaling up the HTML node tree to render as an image before getting pasted on the PDF
  public printQ(quality = 3): any { // quality between 0 and 4
    const filename = 'dl2020lineup.pdf'
  
    html2canvas(document.querySelector('#printposter'),
      { scale: quality }
    ).then(canvas => {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [842, 632]
      }) //'p', 'px'); // px or in (inch?) 'a4'

      let divWidth = pdf.internal.pageSize.getWidth()
      let divHeight = pdf.internal.pageSize.getHeight()

      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 0, 632)
      pdf.save(filename)
    })
  }

}
