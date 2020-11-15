import employeesSchema from "./employees.schema";
import { Employee } from '../../providers/model/employee.model';

export class EmployeesSerivce {
  async createEmployee(params: Employee): Promise<any> {
    const _session = new employeesSchema(params);
    return _session.save();
  }

  async updateEmployee(params: Employee): Promise<any> {
    const query = { _id: params._id };
    return employeesSchema.findOneAndUpdate(query, params).exec();
  }

  async getEmployees(params): Promise<any> {
    return employeesSchema.find(params).exec();
  }

  async filterEmployee(condition: any, fields: string | string[] | any): Promise<any> {
    return employeesSchema.findOne(condition, fields).exec();
  }

  async deleteEmployee(_id: string): Promise<any> {
    const query = { _id };
    employeesSchema.deleteOne(query).exec();
  }

}