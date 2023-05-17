import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {
  public groupVisible = false;
  public northwindOrders: any = null;
  public northwindCustomers: any = null;
  public northwindEmployees: any = null;
  public northwindSuppliers: any = null;

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Orders').subscribe(data => this.northwindOrders = data);
    this.northwindService.getData('Customers').subscribe(data => this.northwindCustomers = data);
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
    this.northwindService.getData('Suppliers').subscribe(data => this.northwindSuppliers = data);
  }
}
