# Full-Stack Coffee Application

This is a full-stack website that tracks live orders from the cashier screen to the display on the barista screen, and can check these orders for completeness.

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node-JS, MongoDB, Express and Passport

The objective of this project was to create a coffee app that cashiers can send live orders to baristas. The baristas can see the live orders, and after completing the order they can click on the check icon to send the live order to the completed section of orders on the same screen.

How this is built is with a form submission from the cashier, when the cashier clicks on the submit button, the values from the input tags and select tags are sent to the server, stored in the database and then is rendered to the barista page.

On the barista page is the email and id number of the barista logged, and a list of live orders and complete orders. The barista will receive the live orders. Upon completion the barista can click on the check icon, setting the boolean value from false to true and send the order to the complete order list.

# Optimization

Still refactoring the app to include more items to the menu and better user interface.

## Lessons Learned:



## Installation

1. Clone repo
2. run `npm install`

## Usage

1. run `node server.js`
2. Navigate to `localhost:8080`

## Credit

Modified from Scotch.io's auth tutorial
