import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'CRUD con Angular';

  message: string = '';

  employees = [
    { 'name': 'Anderson', position: 'Trainee', email: 'anderson@mail.com' },
    { 'name': 'Manuel', position: 'Trainee', email: 'manuel@mail.com' }
  ];

  model: any = {}; //Contendra los datos temporales

  model2: any = {}; // para actualizar cambios

  hideUpdate: boolean = true;

  addEmployee(): void {
    this.employees.push(this.model);
    this.model = {};
    this.message = 'Added field';

  }

  deleteEmployee(i: any): void {
    //s
    let answer = confirm('Se eliminará... Estas seguro?');
    if (answer) {
      this.employees.splice(i, 1);
      this.message = 'Field removed'
    }
  }
  myValue: any;
  editEmployee(i: any): void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee(): void {
    this.hideUpdate = true;
    let i = this.myValue;
    for (let j = 0; j < this.employees.length; j++) {
      if (i === j) {
        this.employees[i] = this.model2
        this.message = 'Updated field';
        this.model2 = {}; //limpiar el formulario 
      }
    }
  }
  closeAlert() {
    //closeAlert
    this.message = '';
  }

}
