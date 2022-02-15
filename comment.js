/* let count = 0;
document.getElementById('add-button').addEventListener('click',function(e){
    const inputValue= document.getElementById('input-value').value;
    count++;

if (inputValue==''){
    alert('Please Enter a Value')
}
else{
    const mainContainer = document.getElementById('content-container');
    const tableContainer = document.createElement('tr');
    tableContainer.innerHTML = `
    <th scope="row">${count}</th>
    <td>${inputValue}</td>
    <td><button class="btn btn-danger delete-button">Delete</button>
    <button class="btn btn-success done-button">Done</button>
    </td>`
    mainContainer.appendChild(tableContainer);
    document.getElementById('input-value').value ='';

    const deleteButton = document.getElementsByClassName('delete-button');
    const doneButton = document.getElementsByClassName('done-button');
   
    for ( const button of deleteButton){
       button.addEventListener('click',function(e){
           e.target.parentNode.parentNode.style.display = "none";
       });
      
    }
    for (const button of doneButton){
        button.addEventListener('click',function(e){
            e.target.parentNode.parentNode.style.textDecoration = "line-through"
        })
    }
}
});
document.getElementById("clear-all").addEventListener("click", function (e) {
    document.getElementById("table-content").style.display = "none";
    window.location.reload();
  });


 */