// select color input //


// Select size input//
let gridInput = document.querySelector('#sizePicker');
gridInput.addEventListener('submit', function(event){ // When size is submitted by the user, call makeGrid()//
    event.preventDefault();
    const gridHeight = document.getElementById('inputHeight').value;
    const gridWidth = document.getElementById('inputWidth').value;
    makeGrid(gridHeight, gridWidth);
})

// removing previous values//
function delete_pixelCanvas(){ 
    const tab = document.getElementById('pixelCanvas');
    const rowCount = tab.rows.length;
    for(var i=0; i< rowCount; i--){
        rowCount.deleteRow(i);
    }
}

// Designing grid//
function makeGrid(gridHeight, gridWidth){
    const tab = document.getElementById('pixelCanvas');
    let pixelColur = document.querySelector('#colorPicker');
    delete_pixelCanvas();
    for (var i = 0; i < gridHeight; i++){
        var r = tab.insertRow(i);
        for(var j = 0; j < gridWidth; j++){
            var c = r.insertCell(j);
            c.addEventListener('click', function(event){ 
                // applying colour to selected cells//
                const selectedCell = event.target;
                selectedCell.style.backgroundColor = pixelColur.value;
            })
            
        }
    }
    
}





//}


//col.addEventListener('click', function(event) {
    //alert("hello");
//event.target.style.backgroundColor = colur;
//});




















function delete_pixelCanvas(){
    var table = document.getElementById('pixelCanvas');
    var rowCount = table.rows.length;
    for (var i=rowCount-1; i>=0; i--) {
        table.deleteRow(i);
     }
 }


