var item1;
var item2;
var item3;

document.getElementById("changeList").onclick = promptUser;

function promptUser(){
    item1 = prompt("Enter first item: ");
    item2 = prompt("Enter second item: ");
    item3 = prompt("Enter third item:");
    updateList();
}

function updateList(){
    document.getElementById("firstThing").innerHTML= item1;
    document.getElementById("secondThing").innerHTML= item2;
    document.getElementById("thirdThing").innerHTML= item3;
}