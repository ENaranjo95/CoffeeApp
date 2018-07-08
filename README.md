# My Awesome Project
This project is a user login authorization for our users to leave a message and favorite song so hopefully one day 21 Savage will be able to read their message and reach out to them.

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node-JS, MongoDB, Express and Passport

The object of this project was to fix the thumbs up and thumbs down feature, and to make edits to each of our ejs. In the index.ejs we included an anchor tag if our user navigates to our page and is not a fan of 21 Savage, they can click on this link (Not A Fan?). On the login.ejs page we included a image of our favorite clipart of 21 Savage. On our signup.ejs page we included an input where users could enter their phone number if they would like to contacted by 21 Savage. On the profile.ejs we fixed the thumb Up and thumbs Down feature to add or subtract the value from teh same span. Also we included an input for the user to add their favorite 21 Savage songs, or collaboration of a song (Ex. Psycho - Post Malone ft. 21 Savage).

## Lessons Learned:

I learned how to navigate through our profile.ejs to target the correct childNodes when we want to alter counts or messages when we click on a button or icon. This is important so our application doesn't break after one use. When we add more features that can alter the count or message of an input, its important we are pulling the correct innerText form the childNodes or you will end up targeting the wrong span and breaking your application.

To navigate to through our profile and I console.log(thumbUp) and navigated to the objects to find the correct childNodes following this path (this.parentNode.parentNode.childNodes[i].innerText). I looked for the property (parentNode) for each parentNode object and then the proprty childNode to target the correct index number in the array corresponding to the correct span. I verified to have the correct span by checking for the property innerText and check to see if the value was the correct value displayed in the DOM.

## Installation

1. Clone repo
2. run `npm install`

## Usage

1. run `node server.js`
2. Navigate to `localhost:8080`

## Credit

Modified from Scotch.io's auth tutorial
