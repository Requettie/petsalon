function displayInfo(){
    document.getElementById('information').innerHTML=`You
    <p>${name}, ${street} ${number}</p>
    <p> It is open from ${open} to ${close}</p>
    `;
}

displayInfo();
var c=0;
document.getElementById('Pet').innerHTML=`<p> <b> Name: </b> ${salon.pets[0].name} </p>`;
//create a constructor
class Pet{
    constructor(name,age,breed,gender,service,owner,contactPhone,){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.owner=owner;
        this.contactPhone=contactPhone;
        this.price=0;
        this.id=c++;
    }
}

// create the register function
var txtName=document.getElementById('petName');
var txtAge=document.getElementById('petAge');
var txtBreed=document.getElementById('petBreed');
var txtGender=document.getElementById('petGender');
var txtService=document.getElementById('petService');
var txtOwner=document.getElementById('ownerName');
var txtPhone=document.getElementById('contactPhone');

function register();
    var thePet = new Pet(txtName.value,txtAge.value,txtBreed.value,
    txtGender.value,txtOwner.value,txtPhone.value);
    if(txtName.value==""   || txtService.value==""){
        alert("add the required information")
    }

    console.log(thePet)
    salon.pets.push(thePet);
    
    displayCards();
    
    clearInputs();

    function displayCards(aPet){
        if(aPet.service=="full"){
            aPet.price=40;
        }else if(aPet.service=="shower"){
            aPet.price=30;
        }else if(aPet.service=="nails"){
            aPet.price=10;
        }else if(aPet.service=="shower"){

        }
    }

   function register(){
       var thePet = new Pet(txtName.value, txtType.val(),txtAge.value,txtBreed.value,txtGender.value,txtService.value,
       txtOwner.value,txtPhone.value);
       if(txtName.value=="" || txtService.value==""){

           $("#alert-box").removeClass("hidden");
           $("#alert-box").addClass("alert-danger");
           $("#alert-box").addClass("Add the required information");
           setTimeout(function(){
               $("#alert-box").addClass("hidden");
               $("#alert-box").removeClass("alert-danger");
               
           })

       }
   }

    <div class="alert alert-success" role="alert">
        The register was successful.
    </div>


function displayCards(){
    document.getElementById("pets").innerHTML="";
    for (var i=0;i<salon.pets.length;i++){
        document.getElementById('pets').innerHTML+=`
        <div class ="pet">
            <h3> Name: ${salon.pets[i].name} </h3>
            <p>  Age: ${salon.pets[i].age} </p>
            <p>  Breed: ${salon.pets[i].breed}</p>
            <p>  Gender: ${salon.pets[i].gender}</p>
            <p>  Service: ${salon.pets[i].service}</p>
            <p>  Owner: ${salon.pets[i].owner}</p>
            <p>  Phone: ${salon.pets[i].contactPhone}</p>
        </div>
        `;
    }
}

function deletePet(petID){
    console.log("delete pet"+petId);
    //select the card from the html
    var card=$('#'+petId);
    //search the pet in the array
    var indexDelete;
    for(var i=0;i<salon.pets.length;i++){
        if(salon.pets[i].id===petId){
            indexDelete=i;
            break;
        }
    }
    console.log(indexDelete);
    //remove the pet from the array
    salon.pets.splice(indexDelete,1);
    //remove from the html
    card.remove();
    profitCalculation();
}

    function display(aPet){
        //create the row
        var row=`
        <tr>
            <td>${aPet.name}</td>
            <td>${aPet.age}</td>
            <td>${aPet.gender}</td>
            <td>${aPet.breed}</td>
            <td>${aPet.type}</td>
            <td>${aPet.service}</td>
            <td>${aPet.owner}</td>
            <td>${aPet.contact}</td>
        </tr>`
        //appedn the row to the table
        $('#pet-table').append(row);

    }

function displayCards(aPet){

    //document.getElementById("pets").innerHTML="";
    var tmp="";
    //for(var i=0;i<salon.pets.length;i++){

    var tmp="";

    tmp `<div class="pet">
    <h3> Name:${aPet.name} </h3>
    <p> Age: ${aPet.age}</p>
    <p> Breed: ${aPet.breed}</p>
    <p> Gender: ${aPet.gender}</p>
    <p> Service: ${aPet.service}</p>
    <p> Owner: ${aPet.owner}</p>
    <p> Phone: ${aPet.contact}</p>
    </div>
    `;
    //console.log(tmp);
    //}
}

function deletePet(petId){
    console.log("delete pet"+petID);

    var card=$('#'+petID);

    card.remove();
}

var div=document.getElementById('types');
div.innerHTML=`<p>=1 =1 =1 =1<p>`;
    tmp=`<div id="${aPet.id}" class="pet">
    <h3 class="pet-name">Name:${aPet.name} <button onclick="deletePet(${aPet.id})"></button></h3>
    <p>Type:${icon}</p>
    <p>Age:${aPet.age}</p>
    <p>Breed:${aPet.breed}</p>
    <p>Gender:${aPet.gender}</p>  
    <p>Service:${aPet.service}</p>  
    <p>Price:${aPet.price}</p>  
    <p>Owner:${aPet.owner}</p>  
    <p>Phone:${aPet.contactPhone}</p>  
    </div>
    `;
    document.getElementById('pets').innerHTML+=tmp;
    profitCalculation();



function clearInputs(){
    txtName.value="";
    txtAge.value="";
    txtBreed.value="";
    txtGender.value="";
    txtOwner.value="";
    txtPhone.value="";
}

//for loop for Query;
var petQuery = petQuery;
var petQuery;
for (i = 0; i < petQuery.length; i++) {
  text += cars[i] + "<br>";
}

function deleteCard(petID){
    //select the card from the html

    //search the pet in the array

    //remove the pet from the array

    //remove from the html
}

function searchPet(){
    var ss=$('#search').val();
    console.log(ss);
    salon.pets.forEach(pet=>{
        if(pet.name.toLowerCase().includes(ss.toLowerCase()))
        pet.service
    },
console.log('Search function'))
}

function profitCalculation(){
    var sum=0;
    for(var i=0;i<salon.pets.lenth;i++){
        sum-sum+salon.pets[i].price;
    }
    document.getElementById('profits').
    innerHTML=`Profits=$${sum}`;
}

window.onload=init;

function init(){
    console.log("Init");
    var scooby=new Pet("Scooby,")
    var speedy=new Pet("Speedy")
    salon.pets.push(scooby);
    salon.pets.push(speedy);
    displayTable(scooby);
    displayTable(speedy);
    profitCalculation();
//hook events
$('#register-btn').click(register);
$('#search-btn').click(searchPet);
$('#search').keypress(function(e){
    if(e.key=="Enter"){
        searchPet();
    }
})
$('search')
}

window.onload=init;