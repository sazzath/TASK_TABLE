    
function addRow() {
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  var slNo = rowCount;

  for (var i = 0; i < table.rows[0].cells.length; i++) {
    var cell = row.insertCell(i);

    if (i == 0) {
      // Add ascending SL. No. to first cell of new row
      cell.innerHTML = slNo;
    } 
    
    
    else if (i == table.rows[0].cells.length - 1) {
      // Add delete button
      cell.innerHTML =
        '<button class="btn btn-danger" onclick="deleteRow(this)">Delete</button>';
    } 
    
    
    
    else if (i == 4 || i == 5) {
      // Add calendar input for Start Date and Due Date attributes
      var input = document.createElement("input");
      input.type = "date";
      cell.appendChild(input);
    } 
    
    
    else if (i == 3) {
      // Add dropdown list for Priority column
      var input = document.createElement("select");
      var options = ["Low", "Medium", "High"];
      for (var j = 0; j < options.length; j++) {
        var option = document.createElement("option");
        option.value = options[j];
        option.text = options[j];
        input.appendChild(option);
      }
      cell.appendChild(input);
    } 
    
    
    else if (i == 2) {
      // Add dropdown list for status
      var input = document.createElement("select");
      var options = ["Ongoing", "Completed"];
      for (var j = 0; j < options.length; j++) {
        var option = document.createElement("option");
        option.value = options[j];
        option.text = options[j];
        input.appendChild(option);
      }
      cell.appendChild(input);
    } 
    
    
    
    else if (i == 6) {
  // Add input of type number with min and max values for task completion
  var input = document.createElement("input");
  input.type = "number";
  input.min = "0";
  input.max = "100";
  input.step = "1";
  input.value = "0";
  input.setAttribute("oninput", "validity.valid||(value='');");
  input.setAttribute("onkeyup", "this.setAttribute('value', this.value);");
  cell.appendChild(input);
  cell.innerHTML += "%";
}

else if (i == 1) {
  // Add text input with keyup and blur event listeners for task name column
  var text = document.createElement("span");
  text.innerHTML = "Click here for input";
  text.addEventListener("click", function() {
    var input = document.createElement("input");
    input.type = "text";
    input.value = this.innerHTML;
    input.addEventListener("keyup", function(e) {
      if (e.keyCode === 13) {
        // "Enter" key code
        var value = this.value;
        var parentCell = this.parentNode;
        parentCell.removeChild(this);
        parentCell.innerHTML = value;
      }
    });
    input.addEventListener("blur", function() {
      var value = this.value;
      var parentCell = this.parentNode;
      parentCell.removeChild(this);
      parentCell.innerHTML = value;
    });
    this.parentNode.appendChild(input);
    this.parentNode.removeChild(this);
    input.focus();
  });
  cell.appendChild(text);
  
}


else {
      // Add text input with keyup and blur event listeners for other columns
      var input = document.createElement("input");
      input.type = "text";
      input.addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
          // "Enter" key code
          var value = this.value;
          var parentCell = this.parentNode;
          parentCell.removeChild(this);
          parentCell.innerHTML = value;
        }
      });
      input.addEventListener("blur", function () {
        var value = this.value;
        var parentCell = this.parentNode;
        parentCell.removeChild(this);
        parentCell.innerHTML = value;
      });
      cell.appendChild(input);
    }
  } }



    function deleteRow(btn) {
        var row = btn.parentNode.parentNode;
        var rowIndex = row.rowIndex;
        var table = document.getElementById("myTable");
        table.deleteRow(rowIndex);
        
        // Renumber SL. No. column after deleting row
        for (var i = rowIndex; i < table.rows.length; i++) {
            table.rows[i].cells[0].innerHTML = i;
        }
        
        // Save table data to local storage
        saveTableData();
    }
  