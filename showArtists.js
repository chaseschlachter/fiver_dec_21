// Artist's page where I'd like show guestsAttend for each individual event

<% for (let events of artist.events ) {%>

  <div class="card mb-3 shadow">
      <div class="row">
          <div class="col-md-8">
              <div class="card-body">
                  <h5 class="card-title"><%= events.event_name %> </h5>
                  <p class="text"><%= events.description %> </p>
                  <p class="text"><%= events.totalGuests %> </p>
                  <p class="text">
                      <small class="text-muted"><%= events.description %> </small>
                  </p>
                  <a class="btn btn-primary" href="/events/<%= events.id %>">View Event</a>
              </div>
          </div>
      </div>
  </div>
<% }%>
 
