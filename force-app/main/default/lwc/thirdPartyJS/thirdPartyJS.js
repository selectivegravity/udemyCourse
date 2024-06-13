import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment'
import ANIMATE from '@salesforce/resourceUrl/animate'
import {loadScript,loadStyle} from 'lightning/platformResourceLoader'

export default class ThirdPartyJS extends LightningElement {
    currentDate=''
    renderedCallback(){ 
        Promise.all([
            loadScript(this, MOMENT+'/moment/moment.min.js'),
            loadStyle(this, ANIMATE+'/animate/animate.min.css')
        ]).then(()=>{ // Promise.all([])
            this.setDateOnScreen()
        }).catch(error=>{ 
            console.error(error)
        })
    }
    setDateOnScreen(){ 
        this.currentDate = moment().format('LLLL')
    }
}