import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

// var EmberApp = require('ember-cli/lib/broccoli/ember-app');
//
// module.exports = function(defaults) {
//   var app = new EmberApp(defaults, {
//     // Add options here
//   });
//
//   app.import('bower_components/bootstrap/dist/css/bootstrap.css');
//   app.import('bower_components/bootstrap/dist/css/bootstrap-theme.css');
//   app.import('bower_components/bootstrap/dist/js/bootstrap.js');
//
//   return app.toTree();
// };
