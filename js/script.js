// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm');
let empTable = document.querySelector('#employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = '';

function incrementCount() {
    count++;
    // console.log(count); - test to make sure function is working
    return count;
}

function decrementCount() {
    count--;
    return count;
}

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.querySelector('#id').value;
    let empName = document.querySelector('#name').value;
    let ext = document.querySelector('#extension').value;
    let email = document.querySelector('#email').value;
    let department = document.querySelector('#department').value;

   
 
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = empTable.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell();
    let cellName = row.insertCell();
    let cellExt = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDepartment = row.insertCell();
    let cellDeleteBtn = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(empName));
    cellExt.appendChild(document.createTextNode(ext));
    cellEmail.appendChild(document.createTextNode(email));
    cellDepartment.appendChild(document.createTextNode(department));
    cellDeleteBtn.appendChild(document.createTextNode('X'));
 

    // CREATE THE DELETE BUTTON
    cellDeleteBtn.className = 'btn btn-danger btn-sm float-right m-2 p-2';
    
 
    // RESET THE FORM
    document.querySelector('#id').value = '';
    document.querySelector('#name').value = '';
    document.querySelector('#extension').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#department').value = '';

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    incrementCount();
    // empCount.appendChild(document.createTextNode(count)); - INCORRECT METHOD
    document.getElementById('empCount').innerHTML = count;
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {

        if (confirm('Are you sure you want to delete this employee?')) {
            employees.deleteRow(e.target.parentElement.rowIndex);
            decrementCount();
            // empCount.appendChild(document.createTextNode(count)); - INCORRECT METHOD
            document.getElementById('empCount').innerHTML = count;
        }

    }
});