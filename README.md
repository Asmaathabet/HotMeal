
![Build Status](https://api.travis-ci.com/Asmaathabet/HotMeal.png?branch=master)

# **HotMeal**
App for Resutrants 

## **Table of Contents** 
* [Main Problem](#main-problem)
* [Problem Causes](#problem-causes)
* [Problem Solution](#problem-solution)
* [User Stories](#user-stories)
* [User Journey](#user-journey)
* [Illustrations](#illustrations)
  * [Database Schema](#database-schema)
  * [Prototype](#prototype)
* [Technologies](#technologies)
* [Launch App](#launch-app)
  * [Database Setup](#database-setup)
  * [Environment Variables](#environment-variables)
  * [Start the Server](#start-the-server)
* [Rescources](#rescources)


## **Main Problem** 

There is not a real Satisfaction for the resturants' customers about the resturants' services in Gaza.

## **Problem Causes** 

- Delay in delivering meals to the customers.

- Delay the customers on their important appointments.

- The customers get in a bad mood and be frustrated about that resturant.

- Static menues, some meals may be unavailable that day ,even so, they are still staying in the menu.

- The customers find that hard to change any unsatisfying thing in their order.

- The customers cant easiely send feedback to the resturants' managers.

## **Problem Solution** 
Our app is designed to let the users order their meals,edit them as they desire without needing to call waiters. Moreover, they can send their feedback through the app.

## **User Stories** 
  - As a user I can enter the secret number to validate my order.
  - As a user I can see the meals and filter them by category.
  - As a user I can see the meal ingredients and its description
  - As a user I have the option to edit the minor ingredients the way I desire.
  - As a user I can add the meal to my order as it is or after my editing.
  - As a user I can show my order, edit it or cancel it.
  - As a user I can submit the Order.
  - As a user I can call the waiter to get my order instesd of making it online.
  - As a user I can send my feedback. 

## **User journey**

  User has to enter table number and secret number then click enter ,Then order page will appear to let the user choose or make his own meal from the menu , if the user clicks on a specific meal, the meal's content and details will appear and let the user edits its ingredients and its amount then click submit .
  User can send his or her feedback, has the options to call the waiter instead of ordering through the app .

## **Illustrations**

### **Database Schema**
![](https://user-images.githubusercontent.com/27697589/65246056-77e7ca00-daf6-11e9-9d0e-4104d73d7996.png)

### **Prototype**

[View Prototype](https://www.figma.com/proto/wNnEm89q827FnGPdOaJKK8/HotMeal?node-id=7%3A1&scaling=scale-down) :eyes: 

![Screenshot from 2019-10-08 15-17-04](https://user-images.githubusercontent.com/29041512/66395190-7a479080-e9df-11e9-821b-962682f20071.png)

## **Technologies** 
Database: PostgreSQL  
Styling:  CSS   
BackEnd: Node.js and Express    
FrontEnd: React Js  

## **Launch App**  

> First clone this repo:  
`git clone https://github.com/Asmaathabet/HotMeal.git`

> Run `npm i` to install the dependencies for the app as general.

> Run `cd client` and `npm i` to install dependencies for react Js . 

### Database Setup

> In terminal type psql or pgcli if installed. Within psql/pcli enter the following commands:

```
CREATE DATABASE [db_name];  
CREATE USER [user_name] WITH PASSWORD ['password'];
ALTER DATABASE [db_name] OWNER TO [user_name];
```

> Set the database url in your config.env file as follows (setting the values in square brackets to the values you defined in the steps above):

```postgres://[user_name]:[password]@localhost:5432/[db_name]``` 

assign the previous line to DEVELOPMENT_DB and so that you can create another Database to TESTING_DB if you want to check it by testing case.

> Run the build.js file to build database tables in terminal: 

```node server/database/config/build```   

> Run the insertStatic.js file to build database Fake Data in terminal: 

```node server/database/config/insertStatic```   

### Environment Variables 
Environment variables are one of the ways we keep our product safe. If you want to access our app locally you will need to add your own.

First create a [config.env](https://github.com/dwyl/env2#create-a-env-file) file and add the following variables:
```
TESTING_DB
DATABASE_URL
DEVELOPMENT_DB
PRIVATEKEY
```

### Start the Server

To start the server! In your terminal write: 

`npm run dev`

then you should be able to go to [localhost](http://localhost:5000/) and view the app!

## Rescources
* [Node Js](https://nodejs.org/en/)
* [Express Framework](https://expressjs.com/)
* [Joi library](https://www.npmjs.com/package/joi) 
* [React Library](https://reactjs.org/)
* [JSON Web Token](https://jwt.io/introduction/)
* [Refactor Documentation](https://docs.google.com/presentation/d/1sX1-VcikL7x4zOKbtqgB4JEJiaGbIqG0LGNptasGiw4/edit?usp=sharing)
