
//FETCH and READ people.json disk file

fetch('./student.json')
.then(response => response.json())
.then(data => {
    // creating container to hold student 
    const container = document.createElement('div');
    container.id = 'studentContainer';

    // Looping throughj the array in the json data
    data.forEach(student => {
        //creating a new div for each student
        const studentDiv = document.createElement('div');
        studentDiv.className = 'student';

        //adding the student's data to the div
        studentDiv.innerHTML = `
        <h4>${getName(student)}<h4>
        <ul>Semester: ${getSemester(student)}</ul>
        <ul>Program: ${getProgram(student)}</ul>
        <ul>Cohort: ${getCohort(student)}</ul>
        <ul>Year: ${getYear(student)}</ul>
        `;

        //adding the person's div to the container
        container.append(studentDiv);

        //logging the data to the console
        console.log(getName(student));
        console.log(getSemester(student));
        console.log(getProgram(student));
        console.log(getCohort(student));
        console.log(getYear(student));
    });

    //adding the container to the body of the HTML
    document.body.append(container);
})
.catch(error => {
    // handling any errors that occur while fetching the file
    console.error(error);
});

function getName(student) {
    return `${student.Name}`;
}

function getSemester(student) {
    return `${student.Semester}`;
}

function getProgram(student) {
    return `${student.Program}`;
}

function getCohort(student) {
    return `${student.Cohort}`;
}

function getYear(student) {  
    return `${student.Year}`;
}
