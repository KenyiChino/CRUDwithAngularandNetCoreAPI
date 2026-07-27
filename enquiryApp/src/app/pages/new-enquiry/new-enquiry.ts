import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-enquiry',
  imports: [FormsModule],
  templateUrl: './new-enquiry.html',
  styleUrl: './new-enquiry.css',
})

export class NewEnquiry implements OnInit {

  newEnqObj: any = {
    "enquiryId":0,
    "customerName":"",
    "mobileNo":"",
    "city":"",
    "serviceId":0,
    "enquoryDate": new Date(),
    "status": "",
    "message":''
  }
  masterSrv = inject(Master);
  servicesList: any[]= [];

  ngOnInit(): void{
    this.getServices();
  }

  getServices(){
    this.masterSrv.getAllService().subscribe({
      next:(res:any)=>{
        this.servicesList = res;
      }
    })
  }

  onSaveEnquiry(){
    this.masterSrv.createNewService(this.newEnqObj).subscribe({
      next:(res:any)=>{
        alert("Enquiry Submited")
      }
    })
  }
}
