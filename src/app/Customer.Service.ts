
export class CustomerService {

    course: Array<any> = [{ id: 1, title: "java" }, { id: 2, title: "typescript" }, { id: 3, title: "javascript" }];

    getCourse() {
        return this.course;
    }

    addCourse(course) {
        this.course.push(course);
        console.log(course);
        console.log(this.course);
    }

}