import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master, ServiceItem } from '../../service/master';


@Component({
  selector: 'app-services',
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit{
  masterSrv = inject(Master);
  serviceList: ServiceItem[]=[];
  serviceObj: ServiceItem = this.getEmptyService();
  isEditMode = false;

  ngOnInit(): void {
    this.getAllServices();
  }

  getAllServices(){
    this.masterSrv.getAllService().subscribe({
      next: (res) => {
        this.servicesList = res;
      },
      error: () => {
        alert('Unable to load services');
      }
    });
  }

  
}
