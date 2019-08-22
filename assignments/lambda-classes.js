// CODE here for your Lambda Classes


class Person{
    constructor(attr){
        this.name = attr.name,
        this.age = attr.age,
        this.location = attr.location
    }
    speak(){
        console.log (`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty,
        this.favLanguage = attr.favLanguage,
        this.catchPhrase = attr.catchPhrase
    }
    demo(subject){
        console.log (`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log (`${student.name} receives a perfect score on ${subject}`);
    }
}

console.log (this.Instructor);

class Student extends Instructor {
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground,
        this.className = attr.className,
        this.favSubjects = attr.favSubjects
    }
    listsSubjects(){
        console.log (this.favSubjects);
    }
    PRAssignments(subject){
        console.log (`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log (`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName,
        this.favInstructor = attr.favInstructor
    }
    standUp(channel){
        console.log (`${this.name} annouces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log (`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}
