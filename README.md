[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=fssa-batch3_vignesh.ramachandran__web_project&metric=bugs)](https://sonarcloud.io/summary/new_code?id=fssa-batch3_vignesh.ramachandran__web_project)

# SR CATERING
	My project is a catering website. User can order their menu which is required for their function and it will be delivered.

### Project documentation - https://docs.google.com/document/d/1mntxGw1zAZ9jzZn4YWECB79RVIILoJUW/edit?usp=sharing&ouid=104125375979350678552&rtpof=true&sd=true

### Flow chart - https://drive.google.com/file/d/1TwCjMev4_wbL5sSiI0en-2uc9PUMUeQo/view?usp=sharing

### Wire frame - https://drive.google.com/file/d/1LcEWOrWk6VPa2ZhLev0mI4DAlmA5gQ-k/view?usp=sharing

### Sonar cloud - https://sonarcloud.io/summary/new_code?id=fssa-batch3_vignesh.ramachandran__web_project

## Buyer

### Register page
- Scenario 1: Successfully create an account
    - Steps:
        1. Navigate to the registration page.
        2. Enter the required information such as name, email,phone_number and password.
        3. Click the "Register" button.
    - Expected Result:
        - The user is redirected to the Login page.

### Login page
- Scenario 1: Successfully login in to account
    - Steps:
        1. Navigate to the login page.
        2. Enter the required information such as email and password.
        3. Click the "login" button.
    - Expected Result:
        - The user is redirected to the home page.
        - User profile created.


### View profile details
- Scenario 1: Successfully view account details
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the profile page.
        3. View the profile details such as name, email,phone_number and password.
    - Expected Result:
        - The user can view their profile details.


### Edit profile details
- Scenario 1: Successfully edit profile details
    - Steps:
        1. Log in as a seller.
        2. Navigate to the profile page.
        3. Click the "Edit profile" button.
        4. Update the account details.
        5. Click the "Save" button.
    - Expected Result:
        - The user's profile details are updated.


### View Menu/Category
- Scenario 1: Successfully view Menu/Category
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the Menu/Category listing page.
        3. View the list of available Menu/Category.
    - Expected Result:
        - The user can view the list of available Menu/Category.


### View Dish
- Scenario 1: Successfully view Dish
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the available dish listing page.
        3. Select a Menu/Category to view its dish.
    - Expected Result:
        - The user can view the dish list of the selected Menu?Category.


### Add Menu/Category to cart
- Scenario 1: Successfully add Menu/Category to cart
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the Menu/Category listing page.
        3. Select a Menu/Category to add to cart.
        4. Click the "Add to Cart" button.
    - Expected Result:
        - The Menu/Category is added to the user's cart.


### View Menu/Category in cart
- Scenario 1: Successfully view Menu/Category in cart
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the cart page.
        3. View the list of Menu/Category in the cart.
    - Expected Result:
        - The user can view the list of Menu/Category in the cart.


### Remove Menu/Category from cart
- Scenario 1: Successfully remove Menu/Category from cart
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the cart page.
        3. Remove the selected Menu/Category from the cart.
    - Expected Result:
        - The Menu/Category is removed from the user's cart.


### Buy a Menu/Category
- Scenario 1: Successfully purchase a Menu/Category
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the cart page.
        3. Select required Menu/Category to Order.
        4. Enter the Delivery date and No.of.guest.
        5. Click the "Order" button.
        6. Enter the Delivery address.
        7. Click the "Submit" button.
    - Expected Result:
        - The user is redirected to the my orders page.
        - An order confirmation email is sent to the user's email address.

### View list of orders
- Scenario 1: Successfully view list of orders.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the my order page.
        3. View the list of orders.
    - Expected Result:
        - The buyer can view the list of orders.

### View order details
- Scenario 1: Successfully view order details
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the my order page.
        3. Select an order to view.
        4. Click the "View" button.
    - Expected Result:
        - The buyer can view the details of the selected order.

### Cancel order
- Scenario 1: Successfully cancel order.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the my order page.
        3. Select an order to cancel.
        4. Click the "Cancel" button.
    - Expected Result:
        - The buyer can cancel the order.



## Admin

### Create a new Menu/Category/Dish to sell
- Scenario 1: Successfully create a new Menu/Category/Dish to sell
    - Steps:
        1. Log in as a admin.
        2. Navigate to the Menu/Category/Dish creation page.
        3. Enter the Menu/Category/Dish details such as name, description and price.
        4. Upload Menu/Category images.
        5. Click the "Create" button.
    - Expected Result:
        - The new Menu/Category/Dish is created and added to the user's list of Menu/Category/Dish.

### View list of products
- Scenario 1: Successfully view list of Menu/Category/Dish.
    - Steps:
        1. Log in as a admin.
        2. Navigate to the Menu/Category/Dish list page.
        3. View the list of Menu/Category/Dish.
    - Expected Result:
        - The admin can view their list of Menu/Category/Dish.

### Edit product details
- Scenario 1: Successfully edit Menu/Category/Dish details
    - Steps:
        1. Log in as a admin.
        2. Navigate to the Menu/Category/Dish page.
        3. Select a Menu/Category/Dish to edit.
        4. Click the "Edit" button.
        5. Update the Menu/Category/Dish details.
        6. Click the "Save" button.
    - Expected Result:
        - The Menu/Category/Dish details are updated.

### View list of orders
- Scenario 1: Successfully view list of orders
    - Steps:
        1. Log in as a admin.
        2. Navigate to the orders page.
        3. View the list of orders.
    - Expected Result:
        - The admin can view the list of orders.

### View order details
- Scenario 1: Successfully view order details
    - Steps:
        1. Log in as a admin.
        2. Navigate to the orders page.
        3. Select an order to view.
        4. Click the "View Order" button.
    - Expected Result:
        - The admin can view the details of the selected order.
            
            
            
            
            
