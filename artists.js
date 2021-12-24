const Artist = require('../models/artist');
const Event = require('../models/event');
const catchAsync = require('../utils/catchAsync');


module.exports.showArtist = async (req, res,) => {
    const artist = await Artist.findById(req.params.id).populate('events');
    if (!artist) {
        req.flash('error', 'Cannot find that Artist');
        return res.redirect('/artists');
    }
    const artistId = artist._id;
    console.log(artist._id);
    let totalGuests = 0;
	  let attendedGuests = 0;
	  const eventData = await Event.aggregate([
	  	{
	  		"$match": {
  				"artist": artistId
    			}
  		},
  		{
  		$project: {
	  		_id: 1,
	  		name: 1,
	  		guests: 1,
	  		totalGuests: { $cond: { if: { $isArray: "$guests" }, then: { $size: "$guests" }, else: "NA" } },
	  		attendedGuests: {
			  	$size: {
			  		$filter: {
				  		input: "$guests",
					  	as: "guest",
  						cond: {
	  						$and: [{
		  						$eq: ["$$guest.attended", "Y"]
			  				}]
				  		}
				  	}
  				}
	  		}
	  	}
  	}
  	])
       if (eventData && Array.isArray(eventData) && eventData.length > 0) {
	  	totalGuests = eventData[0].totalGuests;
		  attendedGuests = eventData[0].attendedGuests;
  	}
      const guestSignups = JSON.stringify(totalGuests);
      const guestAttends = JSON.stringify(attendedGuests);
      console.log(guestSignups);
      res.render('artists/show', { artist, guestSignups, guestAttends });
  }
  
