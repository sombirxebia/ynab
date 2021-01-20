import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';
declare var $: any;

@Component({
  selector: 'app-payee-list',
  templateUrl: './payee-list.component.html',
  styleUrls: ['./payee-list.component.css']
})
export class PayeeListComponent implements OnInit {
  loader: boolean = false;
  budgetDetails: any;
  budgetPayees: any = [];
  payeeTransactions: any;
  payeeCount: any = 0;
  payeeDetails: any;
  payeeTransactionsCount: any = 0;
  constructor(private route: ActivatedRoute, private backendService: BackendService) { }

  ngOnInit(): void {
    this.getBudgetPayeeList();
  }

  getBudgetPayeeList():void {
    this.loader = true;
    this.route.params.subscribe(params => {
      this.backendService.getBudgetDetails(params.budget_id).subscribe((data:any)=>{
        this.budgetDetails = data.data.budget;
        this.budgetPayees = this.budgetDetails.payees ? this.budgetDetails.payees : [];
        this.payeeDetails = this.budgetPayees[0] ? this.budgetPayees[0] : [];
        this.payeeCount = this.budgetPayees.length;
        this.loader = false;
      });
    })
  }

  openPayeeDetails(budget_id:string, payee_id: string) {
    this.loader = true;
    let payeeDetailsFilter = this.budgetPayees.find((payee: any) => payee.id == payee_id);
    this.payeeDetails = payeeDetailsFilter;
    $("#viewPayeeDetails").modal('show');
    this.backendService.getPayeeTransactions(budget_id, payee_id).subscribe((data:any)=>{
      this.payeeTransactions = data.data.transactions;
      this.payeeTransactionsCount = this.payeeTransactions.length;
      this.loader = false;
    });
    
  }
  closePayeeDetails():void {
    $("#viewPayeeDetails").modal('hide');
  }

}
