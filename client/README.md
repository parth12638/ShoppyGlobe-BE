ShoppyGlobe: A Basic E-Commerce Application
Objective
ShoppyGlobe is a basic e-commerce application designed to provide hands-on experience with React, Redux, routing, and state management while building reusable and functional components.

Features and Requirements
1. Component Structure
App: Main component serving as the application root.
Header: Displays the navigation menu and shopping cart icon.
ProductList: Fetches and displays a list of products.
ProductItem: Represents a single product with an “Add to Cart” button.
ProductDetail: Displays detailed information for a selected product.
Cart: Displays the items in the cart with options to modify quantities or remove items.
CartItem: Represents a single item in the cart.
NotFound: Displays a 404 page for unknown routes.
2. Props
Components are reusable and receive data via props from their parent components.
Appropriate PropTypes are utilized for type checking.
3. Data Fetching with useEffect
ProductList Component:

Fetches product data from https://dummyjson.com/products using useEffect.
Data is stored in the component's state.
A custom hook is implemented for product fetching.
ProductDetail Component:

Fetches detailed product data based on route parameters using useEffect.
Data is stored in the component's state.
Error Handling: Graceful management of API errors during data fetching.

4. State Management
Redux:

Manages the global state for cart items.
Includes actions, reducers, and selectors for cart operations.
Search Feature:

Allows users to filter products by name or other criteria in the ProductList.
5. Event Handling
Buttons to add products to the cart from the ProductItem component.
Buttons to remove products from the cart in the CartItem component.
State updates and event handling are implemented with Redux.
6. React Routing
Routes are implemented using React Router.
Routes include:
Home (/)
Product Detail (/product/:id)
Cart (/cart)
Checkout (/checkout)
A 404 page is displayed for unknown routes.
7. React Lists
Product lists are rendered in the ProductList component.
Cart items are rendered in the Cart component.
Unique keys are provided for each item.
8. Performance Optimization
Code Splitting and Lazy Loading are implemented using React.lazy and Suspense for optimal performance.
9. Styling
Custom CSS ensures the application is responsive and looks good across devices.
Consistent styling for all components.


**How to Run the Project**
Clone this repository:

bash
Copy code
git clone https://github.com/your-username/shoppyglobe.git
Navigate to the project directory:

bash
Copy code
cd shoppyglobe
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
