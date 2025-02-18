class Person {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
 
class PersonList {
    constructor() {
        this.people = [];
    }
 
    addPerson(id, name, email){
        const newPerson = new Person(id, name, email);
        this.people.push(newPerson);
        return newPerson;
    }
 
    removePerson(id){
        this.people = this.people.filter(person => person.id !== id);
    }
 
    findPerson(id){
        return this.people.find(person => person.id === id);
    }
}
 
 
function loadData() {
    const personList = new PersonList();
 
    personList.addPerson(1,"Vishwas1", "vishwas1@cloudthat.com");
    personList.addPerson(2,"Vishwas2", "vishwas2@cloudthat.com");
    personList.addPerson(3,"Vishwas3", "vishwas3@cloudthat.com");
    personList.addPerson(4,"Vishwas4", "vishwas4@cloudthat.com");
    personList.addPerson(5,"Vishwas5", "vishwas5@cloudthat.com");
 
    console.log(personList);
   
    let dataDisplay = document.getElementById("dataDisplay");
 
    personList.forEach(person =>{
        const newRow = document.createElement('tr');
        const idCell = document.createElement('td');
        idCell.textContent = person.id;
 
        const nameCell = document.createElement('td');
        nameCell.textContent = person.name;
 
        const emailCell = document.createElement('td');
        emailCell.textContent = person.email;
 
        newRow.appendChild(idCell);
        newRow.appendChild(nameCell);
        newRow.appendChild(emailCell);
 
        dataDisplay.appendChild(newRow);
    }
    )
   
}
 