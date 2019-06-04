$.getJSON( "http://localhost:3000/api/todos", function( data ) { /* Retrieving the data from the API page */
	  var items = []; /* Creating a blank array */
	  $.each( data, function( key, val ) {
		items.push( "<li id='" + key + "'>" + val.id +". "+ val.title + "</li>" ); /* Appending the key, id and title as a single list item for each JSON object to the array */
	  });
	 
	  $( "<ul/>", { /* Creating an unordered list */
		"class": "my-new-list",
		html: items.reverse().join( " " ) /* Putting the items in descending order of ID */
	  }).appendTo( "#task" ); /* Appending the list to the HTML div */
	  
	  var count = data.filter(function(element) { /* Filtering the data to count items that have been completed */
		   return element.completed;
	  }).length;
	  
	  var i = items.length.toString(); /* Converting the length of items to a String */
	  var c = count.toString(); /* Converting the count of completed items to a String */
	  
	  $( "#task2" ).append( " " + i ); /* Appending the length of items to the HTML div */
	  $( "#task3" ).append( " " + c ); /* Appending the count of completed items to the HTML div */
});
