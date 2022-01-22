function getStudentsFromStorage() {
    return JSON.parse(sessionStorage.getItem('studenti'))
}

function setStudentsToStorage(students) {
    sessionStorage.setItem('studenti', JSON.stringify(students))
}


function upisi(){
    var studenti=[];
    var studentsizstorage=JSON.parse(sessionStorage.getItem('studenti'))
    if (studentsizstorage!= null) studenti=studentsizstorage
    var student={
        firstName:document.getElementById("ime").value,
        lastName:document.getElementById("prezime").value,
        number:document.getElementById("index").value,
        department:document.getElementById("smjer").value,
        cycle:document.getElementById("ciklus").value,
        semester:document.getElementById("semestar").value,       
        }
    studenti.push(student);
    console.log(studenti);
    setStudentsToStorage(studenti);
}

function trazeni(){
    let indexTrazenog=document.getElementById("trazeni").value;
    var trazeni=pretraga(indexTrazenog);
    if(trazeni===undefined){

        document.getElementById("ispis").innerHTML="Ne postoji";
    }else{
        document.getElementById("ispis").innerHTML="Traženi student je:"+JSON.stringify(trazeni);
    }
    console.log(trazeni);
}


function pretraga(index){
    return getStudentsFromStorage().find(student => student.number==index);
}




window.upisi=upisi;
