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

    addPerson(id, name, email) {
        const newPerson = new Person(id, name, email);
        this.people.push(newPerson);
        return newPerson;
    }

    removePerson(id) {
        this.people = this.people.filter(person => person.id !== id);
    }

    findPersonById(id) {
        return this.people.find(person => person.id === id);
    }

    findPersonByName(name) {
        return this.people.find(person => person.name.toLowerCase() === name.toLowerCase());
    }

    sortById() {
        this.people.sort((a, b) => a.id - b.id);
    }

    sortByName() {
        this.people.sort((a, b) => a.name.localeCompare(b.name));
    }

    sortByEmail() {
        this.people.sort((a, b) => a.email.localeCompare(b.email));
    }
}

const personList = new PersonList();

function loadData() {
    personList.people = []; // Reset data before loading new data

    personList.addPerson(5,"Shreyam5", "shreyam2014@gmail.com");
    personList.addPerson(4,"Shreyam4", "shreyam2013@gmail.com");
    personList.addPerson(3,"Shreyam3", "shreyam2012@gmail.com");
    personList.addPerson(2,"Shreyam2", "shreyam2011@gmail.com");
    personList.addPerson(1,"Shreyam1", "shreyam2010@gmail.com");

    displayData(personList.people);
}

function displayData(people) {
    let dataDisplay = document.getElementById("dataDisplay");
    dataDisplay.innerHTML = ""; // Clear existing table rows

    people.forEach(person => {
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${person.id}</td>
            <td>${person.name}</td>
            <td>${person.email}</td>
        `;

        dataDisplay.appendChild(newRow);
    });
}

function searchPerson() {
    const searchValue = document.querySelector("input").value.trim();
    if (!searchValue) {
        displayData(personList.people);
        return;
    }

    const foundPerson = personList.findPersonByName(searchValue);
    if (foundPerson) {
        displayData([foundPerson]);
    } else {
        alert("Person not found");
    }
}

function sortById() {
    personList.sortById();
    displayData(personList.people);
}

function sortByName() {
    personList.sortByName();
    displayData(personList.people);
}

function sortByEmail() {
    personList.sortByEmail();
    displayData(personList.people);
}
