Beers = new Mongo.Collection("beers");


if (Meteor.isClient) {
  // // counter starts at 0
  // Session.setDefault('counter', 0);
  //
  // Template.hello.helpers({
  //   counter: function () {
  //     return Session.get('counter');
  //   }
  // });

  // Template.hello.events({
  //   'click button': function () {
  //     // increment the counter when button is clicked
  //     Session.set('counter', Session.get('counter') + 1);
  //   }
  // });

  // Access the beer list from all templates
  Template.registerHelper("beers",function(){
    return Beers.find({});
  });

  Template.body.helpers({
    panels : [
      {
        title : "Description",
        headingId : "headingOne",
        collapseId : "collapaseOne",
        body : "Beer Description! Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
        open : true,
      },
      {
        title : "Tasting Notes",
        headingId : "headingTwo",
        collapseId : "collapaseTwo",
        body : "Has good pallate on your face. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
        open : false,
      },
      {
        title : "Food Pairing",
        headingId : "headingThreww",
        collapseId : "collapaseThree",
        body : "Drink this beer with cheese and stuff. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
        open : false,
      },
    ],

    // beers : function() {
    //   return Beers.find({});
    // }

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
  Meteor.startup(function () {
    // code to run on server at startup

    // Prep the beer list
    var eve = '2015-12-31';
    var beerlist = [
        {
          name: "Lager",
          brewery: "Omission",
          abv: 4.6,
          ibu: 20,
          hop: false,
          description: "Omission Lager is a refreshing and crisp beer, brewed in the traditional lager style. Perfect for a variety of beer drinking occasions, Omission Lager’s aromatic hop profile offers a unique, easy-drinking beer for those looking for a lighter and approachable beer style.",
          tasting: "TBD",
          pairing: "TBD",
          time: Date(eve + "T18:00"),
        },
        {
          name: "IPA",
          brewery: "Omission",
          abv: 6.7,
          ibu: 65,
          hop: false,
          description: "Omission IPA is a bright, hop forward Northwest Style IPA produced in the spirit of the original IPAs shipped from the UK to India in the late 1800’s. The heavy-handed use of Cascade and Summit hops give it notable pine, citrus, and grapefruit aromas and flavors. The bitterness is what you would expect of a NW IPA but this beer is balanced and smooth due to the perfect level of malt sweetness. The finish is crisp, clean, and refreshing – it’s a true IPA lover’s IPA.",
          tasting: "TBD",
          pairing: "TBD",
          time: Date(eve + "T18:20"),
        },
    ];

    // Insert all the beers into the collection
    Beers.remove({});
    beerlist.forEach(function(beer) {
        Beers.insert(beer);
    });


  });
}
