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


class Student extends Person {
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


const fred = new Person({
    name: 'Fred',
    age: 37,
    location: 'Bedrock'
  });

const susan = new Person ({
    name: 'Susan',
    age: 30,
    location: 'Arkansa'
});

const brit = new Instructor ({
    name: 'Brit',
    age: 'n/a',
    location: 'Ontario',
    specialty: 'HTML5, CSS, JavaScript', 
    favLanguage: 'CSS',
    catchPhrase: 'Peace Up, A-Town down.'
});

const jake = new Instructor ({
    name: 'Jake',
    age: '29',
    location: 'Texas',
    specialty: 'React, JavaScript', 
    favLanguage: 'Python',
    catchPhrase: 'Something, something, ok.'
});

const john = new Student ({
    name: 'John',
    age: 28,
    location: 'Colorado Springs, CO.',
    previousBackground:'Sales at Comcast',
    className: 'WEB23',
    favSubjects: [
        'CSS',
        'React',
        'Javascript'
    ]
});

const josh = new Student ({
    name: 'Josh',
    age: 26,
    location: 'Dallas, TX.',
    previousBackground:'Streamer on Twitch.tv',
    className: 'WEB20',
    favSubjects: [
        'CSS',
        'React',
        'Javascript'
    ]
});

const batman = new ProjectManager ({
    name: 'BatMan',
    age: '40',
    location: 'Gotham City',
    specialty: 'HTML5, CSS, JavaScript', 
    favLanguage: 'Python',
    catchPhrase: 'Where is she?!?',
    gradClassName: 'League of Assassins',
    favInstructor: "Ra's al  Ghul",
});

const ironman = new ProjectManager ({
    name: 'Tony',
    age: '40',
    location: 'Long Island',
    specialty: 'Everything', 
    favLanguage: 'Snark',
    catchPhrase: 'I am Ironman.',
    gradClassName: 'MIT',
    favInstructor: "Howard Stark",
});


ironman.speak();
ironman.debugsCode(john, 'Javascript');
brit.demo('React');
john.sprintChallenge('HTML5');