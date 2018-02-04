// When size is submitted by the user, call makeGrid()
var cols, rows;

$(document).ready(function () {
    $("#mySubmit").on('click', function (event) {
        if($('#pixelCanvas tr').length > 0) {
            ClearGrid();
        }
        console.log("Getting input dimensions");
        GetGridInputDimensions();
        console.log("creating grid");
        MakeGrid();
    });
});

$("pixelCanvas").on('click', 'td', function (event) {
    var color = $("#colorPicker").val();
    $(this).css('background-color', color);
});

// $(document).ready(function (event) {
//     $("SaveDesign").on('click', function() {
//         console.log("Clicked");
//         SaveDesign();
//     });
// });

//Gets the row and col selection from the webpage.
function GetGridInputDimensions() {
    cols = $('#inputHeight').val();
    rows = $('#inputWidth').val();
}

function ClearGrid() {
    var parent = document.getElementById('pixelCanvas');
    while(parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
    }
}

function MakeGrid() {
    console.log(rows, cols);
    //Creates a Table object from the Table "PixelCanvas" element ID.
    var table = document.getElementById("pixelCanvas");
    //Declares an iterator called Row which is indexed to 0. It then iterates till row is not less than rows.
    for (var row = 0; row < rows; ++row) {
        // Crates a row element variable which will hold the return value of the InsertRow function.
        var rowElement = table.insertRow(row);
        // Not too sure what this does!?
        rowElement.setAttribute("class", "tr");
        //Same as the above information about the row loop.
        for (var col = 0; col < cols; ++col) {
            //Same as the row element declaration above but now for the cell of the row.
            var cell = rowElement.insertCell(col);
            cell.setAttribute("class","td");
            // Adds an event listener to every cell in the row. This event listener changes the cells background colour on click.
            cell.addEventListener('click', function () {
                event.target.style.backgroundColor = document.getElementById("colorPicker").value;
            });
        };
    }
}

function SaveDesign() {
    var table = document.getElementById('pixelCanvas');
    for (var i = 0, row; row = table.rows[i]; i++) {
        console.log(row);
        for(var j = 0, cell; cell = table.rows[i].cells[j]; ++j) {
            console.log(cell);
        }
    }
}
