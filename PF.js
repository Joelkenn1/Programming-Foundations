function dochange(){
    alert("Thank you for visiting my page");
    
}

function intrestcolor() {
    var d1 = document.getElementById("intrest1");
    var d2 = document.getElementById("intrest2");
    d1.className = "orangebackground";
    d2.className = "bluebackground";

}
function addTask () {
    var input = document.getElementById("input");
    // get current text from input field
    var newTask = input.value;
    // only add new item to list if some text was entered 
    if (newTask != "") {
        // create new HTML list item
        var item = document.createElement("li");
        // add HTML for buttons and new task text
        // Note, need to use '' because of "" in HTML
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + newTask;

        // add new item as part of existing list
        document.getElementById("tasks").appendChild(item); 

        input.value = '';
        input.placeholder = "enter new task...";
    }
}

// change styling used for given item
function markDone (item) {
    item.className = 'finished';
}

/* Step 7 below here */
function remove (item) {
    if(item.className == 'finished'){
    item.remove();}
}

/* Step 11 below here */
function doAbout() {
    d1 = document.getElementById("divabout");
    d1.innerHTML = "The author is Caleb Kenney";
    d1.className = "aboutcolor";
}

/* Step 14 below here */
function clearAbout() {
    d1.innerHTML = "";

}

function dogray(){
   c1 = document.getElementById("canvas1");
   c1.style.backgroundColor= "Gray";
   var ctx = c1.getContext("2d");
   ctx.fillStyle = "lightblue";
   ctx.fillRect(75, 40, 150, 70);
   ctx.font = "23px Georgia";
   ctx.fillStyle = "black";
   ctx.fillText("Programming", 81, 80);
}

function dolightblue(){
   c1 = document.getElementById("canvas1");
   c1.style.backgroundColor = "lightblue";
   var ctx = c1.getContext("2d");
   ctx.fillStyle = "gray";
   ctx.fillRect(75, 40, 150, 70);
   ctx.font = "23px Georgia";
   ctx.fillStyle = "black";
   ctx.fillText("Foundations", 87, 80);
 }
