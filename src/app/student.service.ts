import { Student } from "./Student";
import { Programs } from "./Programs";

export class StudentService {


    student: Student[] = [new Student(1, "creating", "student", "form", Programs.CS),
    new Student(2, "creating", "student", "form", Programs.CS)];

    getStudentData() {
        return this.student;
    }

    addStudent(student:Student) {
        this.student.push(student);
        console.log(student);
    }
    handleEdit(studentValue:Student[]){
    return this.student.slice(this.student.length - 1);
    }
    handleDelete(studentToDelete){
        this.student.pop();
        console.log(this.student);
    }

}