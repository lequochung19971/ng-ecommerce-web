import { EmployeesController } from "../controllers/employees/employees.controller";
import { Application, Request, Response } from "express";


export class EmployeesRoutes {
  protected employeesController: EmployeesController;
  
  constructor() {
    this.employeesController = new EmployeesController;
  }

  public route(app: Application) {
    app.post('/employee', async (req: Request, res: Response) => {
      this.employeesController.createEmployee(req, res);
    });

    app.get('/employee/:id', (req: Request, res: Response) => {
      res.send({hung: 'ne'});
    });

    app.put('/employee/:id', (req: Request, res: Response) => {
      this.employeesController.updateEmployee(req, res);
    });

    app.delete('/employee/:id', (req: Request, res: Response) => {

    });

    app.get('/employees', (req: Request, res: Response) => {
      this.employeesController.getEmployees(req, res);
    });
  }
}