let addtaskinput = document.getElementById('addtaskinput');
let addtaskbtn = document.getElementById('addtaskbtn');

showtask();
addtaskbtn.addEventListener('click', () => {
    addtaskinputval = addtaskinput.value;
    if(addtaskinputval.trim() != 0){
        let webtask = localStorage.getItem('localtask');
        if(webtask == null){
            taskObj =[];
        } else {
            taskObj = JSON.parse(webtask)
        }
        taskObj.push(addtaskinputval);
        localStorage.setItem('localtask', JSON.stringify(taskObj));
        addtaskinput.value='';
    }
    showtask();
});

function showtask(){
    let webtask = localStorage.getItem('localtask');
    if(webtask == null){
        taskObj =[];
    } else {
        taskObj = JSON.parse(webtask)
    }
    let htmlContent = ''
    let addedtasklist = document.getElementById('addedtasklist');
    taskObj.forEach((item, index) => {
        htmlContent += `<tr>
                            <th scope="row">${index+1}</th>
                            <td class="tableItem" style="width: 80%;">${item}</td>
                            <td><button id='editbtn' onclick="editTask(${index})" class="btn btn-primary">Edit</button></td>
                            <td><button id='deletebtn' onclick="deleteItem(${index})" class="btn btn-danger">Delete</button></td>
                        </tr>`;
    });
    addedtasklist.innerHTML = htmlContent;
}

editTask = index => {
    let saveindex = document.getElementById('saveindex');
    let addtaskbtn = document.getElementById('addtaskbtn');
    let savetaskbtn = document.getElementById('savetaskbtn');
    saveindex.value = index;
    let webtask = localStorage.getItem('localtask');
    let taskObj = JSON.parse(webtask);
    addtaskinput.value = taskObj[index];
    addtaskbtn.style.display='none';
    savetaskbtn.style.display='inline';
}

let savetaskbtn = document.getElementById('savetaskbtn');
savetaskbtn.addEventListener('click', () => {
    let addtaskbtn = document.getElementById('addtaskbtn');
    let webtask = localStorage.getItem('localtask');
    let taskObj = JSON.parse(webtask);
    let saveindex = document.getElementById('saveindex').value;
    taskObj[saveindex] = addtaskinput.value;
    savetaskbtn.style.display='none';
    addtaskbtn.style.display='inline';
    localStorage.setItem('localtask', JSON.stringify(taskObj));
    addtaskinput.value = '';
    showtask();
});
//deleteItem
deleteItem = index => {
    let webtask = localStorage.getItem('localtask');
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);
    localStorage.setItem('localtask', JSON.stringify(taskObj));
    showtask();
}

let deleteAll = document.getElementById('deleteAll');
deleteAll.addEventListener('click', ()=>{
    let savetaskbtn = document.getElementById('savetaskbtn');
    let addtaskbtn = document.getElementById('addtaskbtn');

    let webtask = localStorage.getItem('localtask');
    let taskObj = JSON.parse(webtask);
    taskObj = [];
    localStorage.setItem('localtask', JSON.stringify(taskObj));
    savetaskbtn.style.display='none';
    addtaskbtn.style.display='inline';
    showtask();
})