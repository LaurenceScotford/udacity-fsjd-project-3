# Store Frontend Project

This is my submission for the third project for the Udacity Full Stack Javascript Developer Nanodegree.

## About

This is a front end for an online store. It is built using the Angular framework.

### Navigation
When a user navigates to the root URL for the store, it initally shows the product list page. The user can navigate freely between this page and their cart by using the navigation links in the header.


### Product list page
The product list page displays photographs and details (name and price) for the avilable products.
The user can use a drop down list to select a quantity of the product they wish to purchase and then click an Add to cart button to add one or more of this item to their cart.
The user can also select a products photograph to see a detail page for that product.


### Product detail page
The detail page shows details for just a single product. In addition to the information shown on the product list page, this page shows a brief description of the product. Again, the user can use the quantity drop down list and Add to cart button on this page.


### Cart page
The cart page shows a list of products and quantities in the cart. The user can adjust the quantities here if desired. This page also has a form for the other required order details (customer's name, delivery address and credit card number). Once valid entries have been added for these, the user can select the Submit button to submit their order.


### Confirmation page
This will show a confirmation page that confirms the items and quantities ordered, the total cost and the date and time of order.

### Other features
- Cart icon on header changes colour to show the status of the cart (empty or not empty)
- Images on the product list and product detail pages have a tag to show how many of that item are in the cart
- The order form on the cart page will not activate the Submit button until valid data is entered and instructive error messages are shown when invalid data is entered
- There is a messaging system that shows useful confirmations of activity (or errors where applicable) in a floating status bar at the top of the screen

## Implementation notes
This project uses a fake back end. This is implemented using the InMemoryDbService Angular library to emulate an Http API server using dummy data in JSON files. The solution could be plugged into a suitable real back end by updating the endpoint URLs in the client services (ProductListService and OrderService).

## Set up
After downloading and unzipping the files, open a terminal in the project root folder and install the application:

```
npm install
```

Once the installation of dependencies has finished, the application can be started:

```
ng serve --open
```

This serves the application on the default port (4200) and will automatically open the application in a browser. If you want to use an alternative port, specify this in the startup command, e.g.:

```
ng serve --port 3000 --open
```

## Third party libraries and resources
- This project is based on starter files supplied by [Udacity](https://www.udacity.com/)
- This application was built using the [Angular framework](https://angular.io/)