fetch('./people.json')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error fetching JSON:', error));

console.log(data.Name); // output: Henry
console.log(data.Semester);
console.log(data.Program);
console.log(data.Cohort);
console.log(data.Year);

