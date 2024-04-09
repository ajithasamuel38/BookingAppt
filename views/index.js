const link ="http://localhost:3000/admin/appointment/userData";
const form = document.getElementById("appointmentForm");
form.addEventListener('submit', datastore);

const deleteItem = document.getElementById("userList");
deleteItem.addEventListener('click', deleteOrder);

window.addEventListener("DOMContentLoaded", showorders);

async function datastore(event){
    event.preventDefault();
    let name =event.target.name.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;
    let myObj = {
        name: name,
        email : email,
        phone : phone
    };
    console.log(myObj);

     try{

        const response = await axios.post(link, myObj);
        dataprint(response.data);
     }
     catch(err){
        console.log(err);
     }
}
function dataprint(obj){
    const{id, name, email, phone} = obj;
    console.log(obj);
    const ul = document.getElementById('userList');
    const li = document.createElement("li");
    li.innerHTML= `${name}  ${email} ${phone}`;
    console.log(li);
    let btn = document.createElement("button");
    btn.id=id;
    btn.type="click";
    btn.textContent = "Delete";
    btn.className ='delete';
    li.appendChild(btn);
    ul.appendChild(li);

}

async function showorders(){
    try{
        const response = await axios.get(link);
        const details = response.data;
        
        details.forEach(data => {
            dataprint(data); // Print each user's data
        });
    }
        catch(err){
            console.log(err);
        }
    
}
async function deleteOrder(event){
   
    if (event.target.classList.contains("delete")) {
        const deleteButton = event.target;
        console.log(deleteButton) // Get reference to the delete button
        const listItem = deleteButton.parentElement; 
        console.log(listItem);// Parent element (list item)
        
        const idvalue = deleteButton.id;
        try {
            const response = await axios.delete(`${link}/${idvalue}`);
            console.log(response);
            deleteButton.remove(); 
            listItem.remove(); // Remove the list item
            // Remove the delete button
        } catch (err) {
            console.log(err);
        }
    }
    

    

    
}
  