# 1890 Bryant

Attempting to replace the current site with an ember impl that grabs artist data from Mission Artists United json endpoints.


Data returned from MAU looks like this

{"artist", 
 {"name":"",
  "image_height":480,
  "flickr":"flickr.com",
  "email_attrs":"{\"fromall\":true,\"fromartist\":true,\"favorites\":true}",
  "blog":"www.blogger.com",
  "url":"bunnymatic.com",
  "nomdeplume":null,
  "lastname":"rogers",
  "id":1,
  "studio_id":7,
  "myspace":"www.myspace.com",
  "image_width":640,
  "profile_image":"artistdata/1/profile/profile.jpg",
  "phone":"212-555-1212",
  "firstname":"mr",
  "facebook":"www.facebook.com",
  "studionumber":"404",
  "login":"bmatic",
  "twitter":"www.twitter.com",
  "state":"active",
  "email":"mrrogers@bunnymatic.com"
 }
}


{"studio":
 {"name":"1890 Bryant Street Studios",
  "image_height":280,
  "city":"San Francisco",
  "zip":94117,
  "url":"http://www.1890bryant.com",
  "street":"1890 Bryant St",
  "lng":-122.4104128,
  "id":4,
  "image_width":400,
  "cross_street":null,
  "profile_image":"studiodata/4/profile/profile.jpg",
  "phone":null,
  "lat":37.7631413,
  "state":"CA",
  "artists":[{"artist":{...}}]
 }
}

