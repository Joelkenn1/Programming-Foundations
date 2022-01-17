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

 function docolor(){
     c1 = document.getElementById("canvas1");
     colorinput = document.getElementById("clr");
     var color = colorinput.value;
     c1.style.backgroundColor = color;
 }

 function dosquare() {
     c2 = document.getElementById("canvas2");
     c2.style.backgroundColor = "white";
     sldrinput = document.getElementById("sldr");
     size = sldrinput.value;
     var ctx = c2.getContext("2d");
     ctx.clearRect(0,0, c2.width, c2.height);
     ctx.fillRect(0,0,size,size/2);
     ctx.fillStyle = "lightgreen";
 }

 var image;
 function onUpload() {
     c3 = document.getElementById("canvas3");
     fileinput = document.getElementById("finput");
     image = new SimpleImage(fileinput);
     image.drawTo(c3);
 }

 function doGray(){
     for(var i of image.values()){
         var avg = (i.getRed()/3 + i.getBlue()/3 + i.getGreen()/3);
         i.setRed(avg);
         i.setBlue(avg);
         i.setGreen(avg);
     }
     var canvas = document.getElementById("canvas3");
     image.drawTo(canvas);
 }

 var fgimg = null;
 var bgimg = null;
 var c4;
 var c5;

 function loadfgimg() {
     var imgfile = document.getElementById("fgfile");
     fgimg = new SimpleImage(imgfile);
     c4 = document.getElementById("canvas4");
     fgimg.drawTo(c4);
 }
 function loadbgimg() {
    var imgfile = document.getElementById("bgfile");
    bgimg = new SimpleImage(imgfile);
    c5 = document.getElementById("canvas5");
    bgimg.drawTo(c5);
}

 function ClearCanvas() {
     c4 = document.getElementById("canvas4");
     c5 = document.getElementById("canvas5");
     var ctx4 = c4.getContext("2d");
     var ctx5 = c5.getContext("2d");
     ctx4.clearRect(0,0,c4.width,c4.height);
     ctx5.clearRect(0,0,c5.width,c5.height);
 }
 function CreateComposite() {
     var finalimg = new SimpleImage(fgimg.getWidth(), fgimg.getHeight());
     for(var i of fgimg.values()){
        if(i.getGreen() > i.getRed() + i.getBlue()){
            var x = i.getX();
            var y = i.getY();
             var bgpixel = bgimg.getPixel(x, y);
             finalimg.setPixel(x, y,bgpixel);
         }
         else{
             finalimg.setPixel(i.getX(), i.getY(), i);
         }
         ClearCanvas(c5);
    }
        return finalimg;
}   
function greenscreen() { 
var pic = CreateComposite();
pic.drawTo(c4);
}
