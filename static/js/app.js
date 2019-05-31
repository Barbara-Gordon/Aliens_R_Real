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
    var ufoTable = d3.select("#ufo-table");
   
    
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData)

    filteredData.foreach(sighting => )
  });
  