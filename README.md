# Car Salon (Shopping Cart App)

Frontend store app made in React implementing React Redux(toolkit) and Router in order to expand my knowledge in those areas.
This project allows users to look through a variety of different cars and buy them by placing them in a cart and later confirming the order.

Live version here: https://mctintor-car-salon.netlify.app/

## Features:

- **Item Card:** Every item (car) is placed in a nicely styled container displaying it's information and action buttons.
- **Interactive UI:** Every nav element and every button trigger various redux and router actions which handle user data.
- **Pages:** App is comprised of multiple pages interactive pages wired with Router where the user can put in or delete data.
- **Redux:** App state and logic is handled in the store folder using Redux Toolkit implementing latest industry standards.

## Pages:

### 1. `App.jsx`
The entry point of the application. It includes the standard elements required on every page like navigation and footer and renders `Outlet` which displays all neccecary pages.

### 2. `HomePage.jsx`
The index default page of the app. It renders all of the products(cars) of the shop via the Cars.jsx component which renders all the Car.jsx components individually and styles them.

### 3. `Details.jsx`
The page that is accessed dynamically via router and uses it's dynamic param to display the details of the corresponding car who's id fits with the param.

### 4. `ErrorPage.jsx`
The Error page with basic error information, wired as the errorElement in the parent route.

### 5. `Cart.jsx`
This page displays all of the items(cars) the user added to cart, with the option to increase, decrease or delete items from the cart. Contains a button to procceed to Checkout.

### 6. `Checkout.jsx`
This page also displays all of the items still in the cart and has a form for user input with a button to confirm the order which opens up a Modal which is the final component for the purchase.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/McTintor/shopping-cart-project.git
   ```

2. Navigate into the project directory:
   ```bash
   cd shopping-cart-project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will run locally at `http://localhost:5173/`.

## Usage

- Scroll through the various vehicles at the salon and choose some to view their details by clicking the `...Click here for more details` button or put them in the cart with the `Add to Cart` button. The cart is automatically updated via Redux.
- You can then go to the cart by clicking the `Cart` element in the navigation.
- In the Cart page you can then look through the items in your cart, increase, decrease or delete them.
- When satisfied with your cart you can go to checkout by clicking the `Proceed to Checkout` button which will take you to the Checkout page.
- In the checkout page you can see your items and you can fill out a user form requiring data for the order confirmation.
- After filling out the neccecary details you can confirm your order by clicking the `Confirm Order` button which opens the final Modal displaying order information.
- In the modal you can view your order details and you can exit the modal by clicking the `OK` button which exits the modal, brings you back to the home page and resets the cart.

## Future Upgrades

- Implement a backend in order to save order information.
- Include user registration and authentication.
- Improve styling by implementing sass.
