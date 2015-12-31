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


  // Template.ratingPanel.helpers({
  //   ratings : [
  //     {
  //         name: "appearance",
  //         label: "Appearance",
  //         values: [1,2,3,4,5]
  //     },
  //     {
  //         name: "pallate",
  //         label: "Pallate",
  //         values: [1,2,3,4,5]
  //     },
  //     {
  //         name: "aroma",
  //         label: "Aroma",
  //         values: [1,2,3,4,5]
  //     },
  //     {
  //         name: "flavor",
  //         label: "Flavor",
  //         values: [1,2,3,4,5]
  //     }
  //   ]
  // });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
