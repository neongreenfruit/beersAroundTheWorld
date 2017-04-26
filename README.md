Creating an application for a New Years tradition!
Meteor Branch

## Install
- Install [meteor](https://www.meteor.com/install) for your platform.
- Install npm if you do not have it 
	- You can install it bundled with meteor using `meteor npm install` in the project directory 


## Launch
Go to the `beersAroundTheWorld\beers` directory and run the command `meteor`
Check out the [Quick Start](https://guide.meteor.com/#quickstart) guide for more information. 

The command prompt will output the address where you can view the app (ie. `http://localhost:3000`). 


## Troubleshooting

###### Router is not Defined
- You need to install [iron-router](http://iron-meteor.github.io/iron-router/).
- In the `beersAroundTheWorld\beers` directory, run `meteor add iron:router`

###### Iron Router Won't Install
- Update to the latest version, use `meteor update`
- Search for iron router, use `meteor search iron:router`
- Attempt install again

###### babel-runtime could not be found in your node_modeles
- Install with meteor using `meteor npm install --save babel-runtime` 
