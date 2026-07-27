import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Master, EnquiryItem } from '../../service/master';


@Component({
  selector: 'app-enquries',
  imports: [CommonModule, DatePipe],
  templateUrl: './enquries.html',
  styleUrl: './enquries.css',
})
export class Enquries implements OnInit {
  masterSrv = inject(Master);
  enquiryList = signal<any[]>([]);

  ngOnInit(): void{
    this.getAllEnquiries();
  }
  
  getAllEnquiries() {
    this.masterSrv.getAllEnquiry().subscribe({
      next: (res) => {
        debugger;
        this.enquiryList.set(res);
      },
      error: () => {
        alert('Unable to load enquiries');
      }
    });
  }

  get NewEnquiryCount() {
    return this.enquiryList().filter((item) => !item.status || item.status.toLowerCase() === 'new').length;
  }

  get activeServiceCount() {
    return new Set(this.enquiryList().map((item) => item.serviceName)).size;
  }
}
