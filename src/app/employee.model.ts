// model class to make variable.

import { Certificate } from "./certificate.model";
import { Designation } from "./designation.model";


export class Employee {

    id!:number;
    name!:string;
    email!:string;
    phone!:string;
    address!:string;
    salary! :string;
    certificates!:Certificate[];
    designation!:Designation;

}

