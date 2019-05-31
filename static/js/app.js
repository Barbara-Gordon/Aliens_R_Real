// from data.js
var tableData = data;

//select the submit button for the form
var submit = d3.select("#filter-btn");

//filter function - Date

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue)

    //select the table    
    var ufoTable = d3.select("#ufo-table>tbody");
    
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData)

    filteredData.forEach((sighting) => {
    
      //Add a new row
      var row = ufoTable.append("tr");
      //Add values to cells in row
      //Date
      row.append("td").text(sighting.datetime);
      //City
      row.append("td").text(sighting.city);
      //State
      row.append("td").text(sighting.state);      
      //Country
      row.append("td").text(sighting.country);
      //Shape
      row.append("td").text(sighting.shape);
      //Duration
      row.append("td").text(sighting.durationMinutes);
      //Comments
      row.append("td").text(sighting.comments);      

    });
  });