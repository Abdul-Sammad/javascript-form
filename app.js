

// var table = document.createElement('table');
// var thead = document.createElement('thead');
// var tbody = document.createElement('tbody');

// table.appendChild(thead);
// table.appendChild(tbody);

// // Adding the entire table to the body tag
// document.getElementById('tbl-container').appendChild(table);



// var row_1 = document.createElement('tr');
// var heading_1 = document.createElement('th');
// heading_1.innerHTML = "Name";
// var heading_2 = document.createElement('th');
// heading_2.innerHTML = "Roll No#";
// var heading_3 = document.createElement('th');
// heading_3.innerHTML = "Class";
// var heading_4 = document.createElement('th');
// heading_4.innerHTML = "Action";

// row_1.appendChild(heading_1);
// row_1.appendChild(heading_2);
// row_1.appendChild(heading_3);
// row_1.appendChild(heading_4)
// thead.appendChild(row_1);

// function deleteRow(element){
//     console.log("elements", element)
//     document.getElementById(element).remove();
// }

// // function editRow(element){
// //    var child = document.getElementById(element).childNodes
// //    console.log(child[0].innerText)
// //    document.getElementById("name").value =child[0].innerText
// //    document.getElementById("roll").value =child[1].innerText
// //    document.getElementById("class").value =child[2].innerText
// // }


// function editRow(no)
// {
//  document.getElementById("edit_button"+no).style.display="none";
//  document.getElementById("remove-button"+no).style.display="none";
//  document.getElementById("save-button"+no).style.visibility="visible";
// //  document.getElementById("save_button"+no).style.display="block";
	
//  var name=document.getElementById("name"+no);
//  var country=document.getElementById("roll"+no);
//  var age=document.getElementById("class"+no);
	
//  var name_data=name.innerHTML;
//  var country_data=country.innerHTML;
//  var age_data=age.innerHTML;
	
//  name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
//  country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
//  age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
// }

// function save_row(no)
// {
//  var name_val=document.getElementById("name_text"+no).value;
//  var country_val=document.getElementById("country_text"+no).value;
//  var age_val=document.getElementById("age_text"+no).value;

//  document.getElementById("name"+no).innerHTML=name_val;
//  document.getElementById("roll"+no).innerHTML=country_val;
//  document.getElementById("class"+no).innerHTML=age_val;

//  document.getElementById("edit_button"+no).style.display="block";
//  document.getElementById("remove-button"+no).style.display="block";
//  document.getElementById("save-button"+no).style.visibility="hidden";
// }

// var rowId = 0;

// function myFunction(){
//     var row_2 = document.createElement('tr');
//     row_2.id = ++rowId;
    
// var elements = document.getElementById("myform").elements;
// //console.log(elements)
// var obj ={};
//     for(var i = 0 ; i < elements.length ; i++){
//         var item = elements.item(i);
//        // console.log(item.value)
//         obj[item.name] = item.value;
//         var row_2_data_1 = document.createElement('td');
// row_2_data_1.innerHTML = item.value;
// row_2_data_1.id= item.name + row_2.id
// row_2.appendChild(row_2_data_1);
      
//     }
//     var action = document.createElement('td')
//     var remove =  document.createElement('button')
//     var edit = document.createElement('button')
//     var save = document.createElement('button')
//     remove.innerText= "Delete"
//     edit.innerText= "Edit"
//     save.innerText= "Save"
//     remove.onclick = () => deleteRow(row_2.id)
//     remove.id = "remove-button" + row_2.id
//     edit.onclick = () => editRow(row_2.id)
//     edit.className = "edit-row"
//     edit.id = "edit_button" + row_2.id
//     save.onclick = () => save_row(row_2.id)
//     save.id = "save-button" + row_2.id
//     save.style.visibility = 'hidden'
//     action.appendChild(remove)
//     action.appendChild(edit)
//     action.appendChild(save)
//     row_2.appendChild(action)
//     tbody.appendChild(row_2);
//     document.getElementById("name").value =""
//     document.getElementById("roll").value =""
//     document.getElementById("class").value =""
//    // rowId++;
// }

