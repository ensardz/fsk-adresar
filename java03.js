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

function sortIme(){
    console.log(students.sort((a,b) =>{
        let fa = a.firstName.toLowerCase(),
        fb = b.firstName.toLowerCase();
    
        if(fa<fb){
        return -1;
        }
        if(fa>fb){
        return 1;
        }
        return 0;
    }
    ));
}

function sortPrezime(){
    console.log(students.sort((a,b) =>{
        let fa = a.lastName.toLowerCase(),
        fb = b.lastName.toLowerCase();
    
        if(fa<fb){
        return -1;
        }
        if(fa>fb){
        return 1;
        }
        return 0;
    }
    ));
}
