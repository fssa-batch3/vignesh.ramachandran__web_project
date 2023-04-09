[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=fssa-batch3_vignesh.ramachandran__web_project&metric=bugs)](https://sonarcloud.io/summary/new_code?id=fssa-batch3_vignesh.ramachandran__web_project)

# SR CATERING
	My project is a catering website. User can order their menu which is required for their function and it will be delivered.

### Project documentation - https://docs.google.com/document/d/1mntxGw1zAZ9jzZn4YWECB79RVIILoJUW/edit?usp=sharing&ouid=104125375979350678552&rtpof=true&sd=true

### Flow chart - https://drive.google.com/file/d/1TwCjMev4_wbL5sSiI0en-2uc9PUMUeQo/view?usp=sharing

### Wire frame - https://drive.google.com/file/d/1LcEWOrWk6VPa2ZhLev0mI4DAlmA5gQ-k/view?usp=sharing

### Sonar cloud - https://sonarcloud.io/summary/new_code?id=fssa-batch3_vignesh.ramachandran__web_project


## Features

### User CRUD
- Create Profile (completed)
- Read Profile (completed)
- Update Profile (completed)
- Logout Profile (completed)

### Menu CRUD
- Create menu (completed)
- Read menu (completed)
- Read menu details (completed)
- Update menu details (completed)
- Delete menu (completed)

### Category CRUD
- Create category (completed)
- Read category (completed)
- Read category details (completed)
- Update category details (completed)
- Delete category (completed)

### Dish CRUD
- Create dish (completed)
- Edit dish (completed)
- Update dish (completed)
- Delete dish (completed)
    
### Add_to_cart CRUD
- Create cart (completed)
- Read cart (completed)
- Read cart details (completed)
- Remove cart (completed)

### Order CRUD
- Create order (completed)
- Read order (completed)
- Cancel order (completed)



## Buyer

### Register page
- Scenario 1: Successfully create an account
    - Steps:
        1. Click the "login" button which is at the top right of the page.
        2. The page navigate to the login page.
        3. Click "Create an account" link.
        4. Enter the required information such as name, email,phone_number and password.
        5. Click the "Register" button.
    - Expected Result:
        - The user is redirected to the Login page.

### Login page
- Scenario 1: Successfully login in to account
    - Steps:
        1. Click the "login" button which is at the top right of the page
        2. The page navigate to the login page.
        3. Enter the required information such as email and password.
        4. Click the "login" button.
    - Expected Result:
        - The user is redirected to the home page.
        - User profile created.


### View profile details
- Scenario 1: Successfully view account details
    - Steps:
        1. Log in as a buyer.
        2. click the "profile" icon which is at the top right of the page.
        3. Then click "My profile".
        4. The page is redirected to the profile page.
        5. You can see the profile details such as name, email,phone_number and password.
    - Expected Result:
        - The user can view their profile details.


### Edit profile details
- Scenario 1: Successfully edit profile details
    - Steps:
        1. click the "profile" icon which is at the top right of the page.
        2. Then click "My profile".
        3. The page is redirected to the profile page.
        4. Click the "Edit profile" button.
        5. Update the account details such as name and password.
        6. Click the "Save" button.
    - Expected Result:
        - The user's profile details are updated.


### Logout profile 
- Scenario 1: Successfully logout profile 
    - Steps:
        1. click the "profile" icon which is at the top right of the page.
        2. Then click "My profile".
        3. The page is redirected to the profile page.
        4. click "Logout" button.
    - Expected Result:
        - The user logged out from the profile page and redirected to the home page.


### View Menu/Category
- Scenario 1: Successfully view Menu/Category
    - Steps:
        1. You can either scroll the home page and click the "readmore" link as per menu name (or)
            you can click the "Menu" which is in the nav bar, then it shows the available menu.
        2. Then you click whatever menu you want.
        3. It navigate to the Category listing page.
        4. You can view the list of available Category for selected Menu.
    - Expected Result:
        - The user can view the list of available Category for selected Menu.


### View Dish
- Scenario 1: Successfully view Dish
    - Steps:
        1. You can either scroll the home page and click the "readmore" link as per menu name (or)
            you can click the "Menu" which is in the nav bar, then it shows the available menu.
        2. Then you click whatever menu you want.
        3. It navigate to the Category listing page.
        4. Then click the "view" button which category you want to see.
        5. It navigate to the available dish page for selected category.
    - Expected Result:
        - The user can view the dish list of the selected Menu/Category.


### Add Menu/Category to cart
- Scenario 1: Successfully add Menu/Category to cart
    - Steps:
        1. Log in as a buyer.
        2. You can either scroll the home page and click the "readmore" link as per menu name (or)
            you can click the "Menu" which is in the nav bar, then it shows the available menu.
        3. Then you click whatever menu you want.
        4. It navigate to the Category listing page for the selected Menu.
        5. Then click the "view" button which category you want to see.
        6. It navigate to the available dish page for selected category.
        7. click the "Add to cart" button 
        8. The selected Menu/Category is added to the Cart.
    - Expected Result:
        - The selected Menu/Category is added to the user's cart.


### View Menu/Category in cart
- Scenario 1: Successfully view Menu/Category in cart
    - Steps:
        1. Log in as a buyer.
        2. click the "My cart" in the nav bar.
        3. It navigate to the cart page.
        4. You can view the list of Menu/Category in the cart.
    - Expected Result:
        - The user can view the list of Menu/Category in the cart.


### Remove Menu/Category from cart
- Scenario 1: Successfully remove Menu/Category from cart
    - Steps:
        1. Log in as a buyer.
        2. click the "My cart" in the nav bar.
        3. It navigate to the cart page.
        4. click the "remove" button which cart menu you want to remove.
        5. It remove the selected Menu/Category from the cart.
    - Expected Result:
        - The Menu/Category is removed from the user's cart.


### Buy a Menu/Category
- Scenario 1: Successfully purchase a Menu/Category
    - Steps:
        1. Log in as a buyer.
        2. If you want to order the menu, first you should add the menu to the Cart.
        3. Add to cart procedure is mentioned above(please check and do it).
        4. After the Menu is added to the cart, click the "My cart" in the nav bar.
        5. It navigate to the cart page.
        6. Before click "order" button, you should enter the "Delivery date" (Delivery date should be at least 8 days from now).
        7. Then you enter the "No.of.guest" as your wish.Then click the "Update" button.
        8. After that click the "Order" button which menu you want to order.
        9. Then it navigate to the Order form.
        10. In the form you should enter the correct Delivery address.
        11. Then you check the menu name, delivery date, no.of.guest and total cost of the menu.
        12. After that click "Submit" button to order.
    - Expected Result:
        - The order placed sucessfully.
        - The user is redirected to the my orders page.

### View list of orders
- Scenario 1: Successfully view list of orders.
    - Steps:
        1. Log in as a buyer.
        2. Click the "profile" icon which is at the top right of the page.
        3. Click the "My orders"
        4. It navigate to the my orders page.
        5. User can see the list of orders.(delivered/not delivered/cancelled)
    - Expected Result:
        - The buyer can see the list of orders.

### View ordered dish details
- Scenario 1: Successfully view ordered dish details
    - Steps:
        1. Log in as a buyer.
        2. Click the "profile" icon which is at the top right of the page.
        3. It navigate to the my orders page.
        4. Click the "View" button of which ordered menu's dish you want to see.
    - Expected Result:
        - The buyer can see the dish details of the selected menu.

### Cancel order
- Scenario 1: Successfully cancel order.
    - Steps:
        1. Log in as a buyer.
        2. Click the "profile" icon which is at the top right of the page. Then click the "My orders"
        3. It navigate to the my orders page.
        4. Click the "Cancel" button which menu you want to cancel. (Note: Not delivered menu only allow to cancel)
    - Expected Result:
        - The order status changed from Not deliverd to Cancelled.



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
            
            
            
            
            
