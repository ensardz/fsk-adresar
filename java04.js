const students=[];

function unos(){
    let ime=document.getElementById("ime").value;
    let prezime=document.getElementById("prezime").value;
    let brIndex=document.getElementById("brIndex").value;
    let smjer=document.getElementById("smjer").value;
    let ciklus=document.getElementById("ciklus").value;
    let semestar=document.getElementById("semestar").value;
    
    const Student ={
        firstName:ime,
        lastName:prezime,
        numIndex:brIndex,
        department:smjer,
        cycle:ciklus,
        semester:semestar
    };
    students.push(Student);
    console.log(students.length);
}

function pretraga(){
    let index=document.getElementById("index").value;
    
    let student= students.find(Student => Student.numIndex === index);

    document.getElementById("ispisIndexa").innerHTML = student.firstName + " " + student.lastName;
}
