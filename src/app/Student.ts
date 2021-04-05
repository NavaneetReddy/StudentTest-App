import { Programs } from "./Programs";

export class Student{

    constructor(public studentID:number, 
                public firstName:string, 
                public middleName:string, 
                public lastName:string, 
                public interestedCourse:Programs){

    }
}