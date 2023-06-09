
# Cab-Booking

In this application user can enter email , source location , destination (i.e A,B,C,D,E,F). Based on the below time between every node given in the assignment. The application will show the shortest time that will be taken to reach the destination and the user can book the cab according to it with estimated cost per cab.


![App Screenshot](https://github.com/Shubhang-2111/Scaler-Assignment/blob/master/screenshots/Screenshot%20(29).png?raw=true)

## Tech Stack
### Frontend
1. React JS
2. Bootstrap Library
3. JavaScript

### Backend

1. Express
2. Node JS
3. MySql
4. JavaScript

## Cab Details
Once user will click on show details button then based on the source and destination choosen and the shortest time , application will show the list of 5 cabs available with its name , price per minutes and the estimated cost based on the journey time.

## Selecting-Cab 
User can tap on select button to choose a cab. Cab which is already booked cannot be booked again as the selecting button will be disabled.

## Editing-Price
Also you can edit the price per minute of the selected cab by clicking on edit price button

## Confirm-Booking
Once the user will click on confirm booking the cab will be booked by the user with estimated cost.

## Tracking-Cab
If the user clicks on track button list of cabs will be displayed with the information whether the cab is booked or not. If the cab is booked it will show the booking source , destination and the booking time of the cab (booking time will be accroding to the database server location). Each time user clicks on track button the data of the cabs gets refreshed.

## How to clone and run on your machine?
Make a file directory in your system. Open it with visual studio or any code editor you use. 
In terminal run the following command:

git clone https://github.com/Shubhang-2111/Scaler-Assignment.git

Once the project is cloned successfully.
Follow the steps:

1. Go to client folder and run the command in terminal:

   npm install react-scripts --save

2. Once the above command is executed run the following command.

    npm start

this will start the react-app.

3. Now go to server folder and run the command:

   node index.js

this will start your server.

4. Go to the website and use it!

5. To refresh the database to its initial values press ctrl+C to stop the server and then use command node index.js again to run the server.


## Screenshots

### Cab details 
![App Screenshot](https://github.com/Shubhang-2111/Scaler-Assignment/blob/master/screenshots/Screenshot%20(30).png?raw=true)

### Tracking

![App Screenshot](https://github.com/Shubhang-2111/Scaler-Assignment/blob/master/screenshots/Screenshot%20(27).png?raw=true)

### Database table 

![App Screenshot](https://github.com/Shubhang-2111/Scaler-Assignment/blob/master/screenshots/Screenshot%20(28).png?raw=true)


