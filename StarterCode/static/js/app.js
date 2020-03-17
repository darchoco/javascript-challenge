// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var filter = d3.select("#filter-btn");
var inputElement = d3.select("#datetime");
var inputValue = inputElement.property("value");

console.log(data);
// YOUR CODE HERE!
data.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) 
    {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the sightings object
      var cell = row.append("td");
      cell.text(value);
    });
  });

  filter.on("click",function()
  {
      //reset the table
    tbody.html("");
    //select the element, then the data inputted
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = data.filter(sighting => sighting.datetime === inputValue);
    filteredData.forEach(function(sighting) 
    {
        console.log(sighting);
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) 
        {
          console.log(key, value);
          // Append a cell to the row for each value
          // in the sightings object
          var cell = row.append("td");
          cell.text(value);
        });
    });
});

