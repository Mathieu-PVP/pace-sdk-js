import { EmployeePayrollDeduction } from '../models/EmployeePayrollDeduction.js';
import { AbstractAPI } from './AbstractAPI.js';

export class EmployeePayrollDeductionAPI extends AbstractAPI { 
    constructor(client) {
        super(client, 'EmployeePayrollDeduction', EmployeePayrollDeduction); 
    }
}
