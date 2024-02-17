231 - How to plan a web project

    1. User stories - Description of the application's functionality from the user's perpspecive. All user stories put together describe the entire application
    2. Features
    3. Flowchart - What we will build
    4. Project's architecture - How we will build it

Common format of User story - As a [type of user], I want [an action] so that [a benefit]

1. Mapty user story:

   1. As a user, I want to log my running workouts with location, distance, time, pace and steps/minute, so i can keep a log of all my running
   2. As a user, I want to log my cycling workouts with location, distance, time, speed and elevation gain, so I can keep log of all my cycling
   3. As a user, I want to see all my workouts at a glance, so I can easily track my progress over time
   4. As a user, I want to also see my workouts on a map, so I can easily check where I work out the most
   5. As a user, I want to see all my workouts when I leave the app and come back later, so that I can keep using app over time

2. Features

   1. Map where user clicks to add new workout (best way to get location coords)
   2. Geolocation to display map at current location (more user friendly)
   3. Form to input distance, time, pace, steps/minute
   4. Form to input distance, time speed, elevation gain
   5. Display all workouts in a list
   6. Display all workouts on the map
   7. Save workouts locally, using local storage API
   8. On the page load, read the saved data from local storage and display

232 - Using geolocation api

navigator.geolocation.getCurrentPosition - has two callbacks, for succesfull result and error. succesful callback has one parameter - position
