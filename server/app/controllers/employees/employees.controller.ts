import { Request, Response } from 'express';
import { EmployeesSerivce } from '../../mongoose/employees/employees.service';
import { Employee } from '../../providers/model/employee.model';
import { IModificationNote } from '../../providers/interface/modification-note.interface';
import { ResponseMessageService } from '../../shared/services/response-message.service';
import { IResponseMessage } from '../../providers/interface/response-message.interface';
import * as _ from 'lodash';

export class EmployeesController {
  private employeeService: EmployeesSerivce;
  private responseMessageService: ResponseMessageService;

  constructor() {
    this.employeeService = new EmployeesSerivce();
    this.responseMessageService = new ResponseMessageService();
  }

  async createEmployee(req: Request, res: Response) {
    const modificationNote: IModificationNote = {
      modifiedOn: new Date(Date.now()),
      modifiedBy: null,
      description: 'Create new employee',
    };

    const body = { ...req.body, modificationNote } as Employee;
    const employee: Employee = new Employee(body);

    if (employee.hasEnoughParams()) {
      this.employeeService.createEmployee(employee)
        .then((data) => {
          const responseMess: IResponseMessage = { res, data, message: 'Create new employee' };
          this.responseMessageService.successReponse(responseMess);
        })
        .catch((err) => {
          if (err) {
            this.responseMessageService.mongoError({ res, err });
          }
        });
    } else {
      this.responseMessageService.insufficientParams({ res } as IResponseMessage);
    }
  }

  async updateEmployee(req: Request, res: Response) {
    const modificationNote: IModificationNote = {
      modifiedOn: new Date(Date.now()),
      modifiedBy: null,
      description: 'Update employee',
    };

    const data = req.body as Employee;
    const employee: Employee = new Employee(data);
    if (req.params.id && employee.hasEnoughParams()) {
      employee._id = req.params.id;

      this.employeeService.filterEmployee({ _id: employee._id }, 'modificationNote')
        .catch(err => this.responseMessageService.mongoError({ res, err } as IResponseMessage))
        .then(dataFiltered => {
          if ((dataFiltered as Employee) && dataFiltered.modificationNote) {
            employee.modificationNote = [...dataFiltered.modificationNote, modificationNote];
            this.employeeService
              .updateEmployee(employee as Employee)
              .catch((err) => this.responseMessageService.mongoError({ res, err }))
              .then((data) => {
                const responseMess: IResponseMessage = { res, data, message: 'Update employee' };
                this.responseMessageService.successReponse(responseMess);
              });
          }
        });
    } else {
      this.responseMessageService.insufficientParams({ res } as IResponseMessage);
    }
  }

  async getEmployees(req: Request, res: Response) {
    const params = {};
    console.log(req.query);
    this.employeeService.getEmployees(params)
      .catch(err => this.responseMessageService.mongoError({res, err} as IResponseMessage))
      .then(data => {
        const responseMess: IResponseMessage = { res, data, message: 'Get employees' };
        this.responseMessageService.successReponse(responseMess);
      })
  }
}
