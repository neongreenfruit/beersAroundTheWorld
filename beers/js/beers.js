// Overhead stuff
var eve = "April 26, 2017 "; // date of event
var startTime = "18:00"; // 24hr time we start the shindig
var startDateTime = new Date(eve + startTime);
var beerGap = 20; // gap between beers
var previewDuration = 5; // number of minutes you want to see a beer before its time
function makeBeerTime(index) {
  var startDate = new Date(eve + startTime);
  var addMinutes = beerGap * index;
  var beerTime = new Date(startDate);
  beerTime.setMinutes(startDate.getMinutes() + addMinutes);
  return beerTime;
}

var beerlist = [
  {
    beer: "IPA",
    brewery: "Omission",
    location: "Oregon, USA",
    style: "IPA",
    abv: 6.7,
    ibu: 65,
    hop: "No hop rating.",
    description: "Omission IPA is a bright, hop forward Northwest Style IPA produced in the spirit of the original IPAs shipped from the UK to India in the late 1800’s. The heavy-handed use of Cascade and Summit hops give it notable pine, citrus, and grapefruit aromas and flavors. The bitterness is what you would expect of a NW IPA but this beer is balanced and smooth due to the perfect level of malt sweetness. The finish is crisp, clean, and refreshing – it’s a true IPA lover’s IPA.",
    tasting: "You should taste this 'gluten-free' IPA!",
    pairing: "Food, or not. Your choice.",
    imgBrewery: "img/o_logo.png",
    imgBeer: "img/o_ipa_beer.png",
  },
  {
    beer: "Lager",
    brewery: "Omission",
    location: "Oregon, USA",
    style: "Lager",
    abv: 4.6,
    ibu: 20,
    hop: "No hop rating.",
    description: "Omission Lager is a refreshing and crisp beer, brewed in the traditional lager style. Perfect for a variety of beer drinking occasions, Omission Lager’s aromatic hop profile offers a unique, easy-drinking beer for those looking for a lighter and approachable beer style.",
    tasting: "You should taste this 'gluten-free' Lager!",
    pairing: "Food and stuff.",
    imgBrewery: "img/o_logo.png",
    imgBeer: "img/o_lager_beer.png",
  },
  {
    beer: "Vienna Lager",
    brewery: "Devil's Backbone",
    location: "Virgnina, USA",
    style: "Vienna Lager",
    abv: 5.2,
    //ibu: 65,
    //hop: false,
    description: "Brewed using a combination of Northern Brewer and Saaz hops with Vienna, Pilsen, Dark Munich and Caramel malts and allowing five weeks for the lagering process and the flavors to fully develop.",
    tasting: "It tastes great!",
    pairing: "It's good with practically anything, since it is one of the best beers in the world!",
    imgBrewery: "img/db_logo.png", 
    imgBeer: "img/db_beer.png",
  },
  {
    beer: "Draft Amber Apple Cider",
    brewery: "Bold Rock",
    location: "Virgina, USA",
    style: "Cider",
    //abv: 4.6,
    //ibu: 20,
    //hop: false,
    description: "It's really yummy!",
    tasting: "TBD",
    pairing: "TBD",
    imgBrewery: "img/br_logo.png",
    imgBeer: "img/br_beer.png",
  },
  {
    beer : "Beer",
    brewery : "Brewery",
  },
  {
    beer : "Beer",
    brewery : "Brewery",
  },
    {
    beer : "Beer",
    brewery : "Brewery",
  },
  {
    beer : "Beer",
    brewery : "Brewery",
  },
  {
    beer : "Beer",
    brewery : "Brewery",
  },
  {
    beer : "Beer",
    brewery : "Brewery",
  },
  {
    beer : "Beer",
    brewery : "Brewery",
  },
    {
    beer : "Beer",
    brewery : "Brewery",
  },
  {
    beer : "Beer",
    brewery : "Brewery",
  },
  {
    beer : "Beer",
    brewery : "Brewery",
  }, 
  {
    beer : "Beer",
    brewery : "Brewery",
  },
  {
    beer : "Beer",
    brewery : "Brewery",
  },
    {
    beer : "Beer",
    brewery : "Brewery",
  },
  {
    beer : "Beer",
    brewery : "Brewery",
  },
  {
    beer : "Beer",
    brewery : "Brewery",
  }, 
];

// Mongo DB Collections
Beers = new Mongo.Collection("beers");

// TODO: this function should not be in global scope... 
// Finds the beer based on the given 24hr milTime string w/ respect to the beerGap
function findBeer(milTime) {
  var adjustedTime = parseInt(milTime) + parseInt(previewDuration);
  var roundTime = parseInt(adjustedTime) - (adjustedTime % parseInt(beerGap));

  //console.log(eve + roundTime);

  if(roundTime.length == 3) {
    roundTime = "0" + roundTime;
  }

  // Lame... hardcoded assumes 4 digits
  var firstTwo = String(roundTime).substring(0, 2);
  var lastTwo = String(roundTime).substring(2, 4)

  //console.log(firstTwo);
  //console.log(lastTwo);

  var colonTime = firstTwo + ":" + lastTwo;

  beerDateTime = new Date(eve + colonTime);
  //console.log(beerDateTime);

  // if they look before the start
  if(beerDateTime < startDateTime) {
    beerDateTime = startDateTime;
  }


  var foundBeer = Beers.findOne({time: beerDateTime});
  return foundBeer;
}


// Routes
Router.route('/', {
  template: "beers"
});

Router.route('/:time', {
  template: "beers",
  data : function() {    
    //console.log("time page " + this.params.time);    
    foundBeer = findBeer(this.params.time);
    //console.log(foundBeer);
    Session.set('currentBeer', foundBeer);
  }
});

if (Meteor.isClient) {
  // Set default beer if no time is found
  Session.setDefault('currentBeer', findBeer("1800"));

  Template.registerHelper("equals", function (a, b) {
    return (a == b);
  });

  // Access the beer list from all templates (sort early to late)
  Template.registerHelper("beers",function(){
    return Beers.find({}, {sort: {time: 1}});
  });

  Template.registerHelper("currentBeer", function() {
    return Session.get('currentBeer');
  })

  // Converts a date time to hh:mm am/pm time
  Template.registerHelper("friendlyTime", function(dateTime) {
    return dateTime.toLocaleTimeString().replace(/:\d+ /, ' ');
  });

  // Determines if a time is the top of the hour
  Template.registerHelper("isHour", function(dateTime) {
    var minutes = dateTime.getMinutes();
    return dateTime.getMinutes() == 0;
  });

  // Make a 24hr time stamp
  Template.registerHelper("milTime", function(dateTime) {
    var minutes = dateTime.getMinutes();
    if(minutes == 0) {
      minutes = "00";
    }
    var hour = dateTime.getHours();
    return hour + "" + minutes;
  });

  Template.registerHelper("nextTime", function(dateTime) {
    return addTimeString(dateTime, beerGap);
  });

  Template.registerHelper("lastTime", function(dateTime) {
    return addTimeString(dateTime, -1 * beerGap);
  });

  function addTimeString(dateTime, val) {
    dateTime.setMinutes(dateTime.getMinutes() + val);
    var minutes = String(dateTime.getMinutes());
    if(minutes.length == 1) {
      minutes = "00";
    }
    return dateTime.getHours() + "" + minutes;
  }

  Template.body.helpers({
    panels : [
      {
        title : "Description",
        headingId : "headingOne",
        collapseId : "collapaseOne",
        body: "description",
        open : true,
      },
      {
        title : "Tasting Notes",
        headingId : "headingTwo",
        collapseId : "collapaseTwo",
        body: "tasting",
        open : false,
      },
      {
        title : "Food Pairing",
        headingId : "headingThreww",
        collapseId : "collapaseThree",
        body: "pairing",
        open : false,
      },
    ],
  });

  Template.ratingPanel.helpers({
    ratings : [
      {
        name: "appearance",
        label: "Appearance",
        values: [1,2,3,4,5]
      },
      {
        name: "pallate",
        label: "Pallate",
        values: [1,2,3,4,5]
      },
      {
        name: "aroma",
        label: "Aroma",
        values: [1,2,3,4,5]
      },
      {
        name: "flavor",
        label: "Flavor",
        values: [1,2,3,4,5]
      }
    ],
  });
}

if (Meteor.isServer) {
  // code to run on server at startup
  Meteor.startup(function () {
    // Insert all the beers into the collection
    Beers.remove({});
    beerlist.forEach(function(beer, index) {
      beer.time = makeBeerTime(index);
      Beers.insert(beer);
    });
  });
}
