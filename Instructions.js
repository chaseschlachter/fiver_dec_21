// I'd like to pull guestAttends from my event model and display the value for each individual event *on* the artist's page. 
// Right now, the aggregation query is working but my page is only displaying the value 
// from the FIRST event in the model and carrying it down the index, instead of populating each with its respective value. 
// I can't figure out how to structure the query to grab the count for each event, 
// then pass that count back to the corresponding artist's page for each individual event. 

// For ex, artist 'macrotickets' is the owner/artist associated with two events in the database (of a total 8 events). 

// How do I display the unique guestAttends for each of those events on 'macrotickets' page? 
// I need help to tweak my code (below) to accomplish the task.

// Code in the other github files (in this repo)
