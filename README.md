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
        3. Click "Create an account" link which is at the bottom of the form .
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
        5. It removes the selected Menu/Category from the cart.
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
        7. Then you enter the "No.of.guest" under "1500" guest only.
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
        5. User can see the list of orders.
        6. If you want to see the order details means click the "View Details" button.
        7. It navigate to the order details page.
        8. Here you can see the order details like no_of_guest, price, delivery date and order status.
    - Expected Result:
        - The buyer can see the list of orders.

### View ordered dish details
- Scenario 1: Successfully view ordered dish details
    - Steps:
        1. Log in as a buyer.
        2. Click the "profile" icon which is at the top right of the page.
        3. It navigate to the my orders page.
        4. User can see the list of orders.
        5. Then click the "View Details" button to the order details.
        6. It navigate to the order details page.
        7. Here you can see the order details like no_of_guest, price, delivery date and order status.
        8. Then click the "View Dishes" button of which ordered menu's dish you want to see.
    - Expected Result:
        - The buyer can see the dish details of the selected menu.

### Cancel order
- Scenario 1: Successfully cancel order.
    - Steps:
        1. Log in as a buyer.
        2. Click the "profile" icon which is at the top right of the page. Then click the "My orders"
        3. It navigate to the my orders page.
        4. User can see the list of orders.
        5. Then click the "View Details" button to the order details.
        6. It navigate to the order details page.
        7. Here you can see the order details like no_of_guest, price, delivery date and order status.
        8. Click the "Cancel" button which menu you want to cancel. (Note: Not delivered menu only allow to cancel)
        9. Then it ask the reason. In the reason box you should enter the reason.
        10. Then press "ok".
    - Expected Result:
        - The order status changed from Not deliverd to Cancelled.
        - The order is cancelled.



## Admin

### Create a new Menu
- Scenario 1: Successfully Admin create a new Menu
    - Steps:
        1. Log in as a admin.(email: vignesh.ramachandran@fssa.freshworks.com, password: Vicky@10)
        2. Click the "profile" icon which is at the top right of the page. Then click the "Admin forms"
        3. It navigate to the forms page.
        4. Then click the "arrow" which is near to "Menu add".
        5. It navigate to the Menu add form page.
        6. In this form, in first box enter the Menu name eg:Breakfast.
        7. In next box enter the link(url) of Menu image.
        8. In the bottom box enter the Menu description.
        9. Then click the "create" button.
    - Expected Result:
        - The new Menu is created and added to the menu data.

### Read Menu
- Scenario 1: Successfully Admin can read Menu
    - Steps:
        1. Log in as a admin.(email: vignesh.ramachandran@fssa.freshworks.com, password: Vicky@10)
        2. Click the "profile" icon which is at the top right of the page. Then click the "Admin forms"
        3. It navigate to the forms page.
        4. Then click the "arrow" which is near to "Menu remove".
        5. It navigate to the Menu remove form page.
        6. First select the menu name which is you want to see.
        7. Then press the "show details" button.
        8. You can see the Menu details such as Menu name, Menu image url, Menu description, and Menu status.
    - Expected Result:
        - Admin can see the Menu details.

### Edit Menu
- Scenario 1: Successfully Admin can edit Menu
    - Steps:
        1. Log in as a admin.(email: vignesh.ramachandran@fssa.freshworks.com, password: Vicky@10)
        2. Click the "profile" icon which is at the top right of the page. Then click the "Admin forms"
        3. It navigate to the forms page.
        4. Then click the "arrow" which is near to "Menu remove".
        5. It navigate to the Menu remove form page.
        6. First select the menu name which is you want to see.
        7. Then press the "show details" button.
        8. You can see the Menu details such as Menu name, Menu image url, Menu description, and Menu status.
        9. You can edit the Menu image url, Menu description.
        10. Then click the "Save" button.
    - Expected Result:
        - Menu details edited (or) updated sucessfully.

### Remove Menu
- Scenario 1: Successfully Admin can Remove Menu from Menu list
    - Steps:
        1. Log in as a admin.(email: vignesh.ramachandran@fssa.freshworks.com, password: Vicky@10)
        2. Click the "profile" icon which is at the top right of the page. Then click the "Admin forms"
        3. It navigate to the forms page.
        4. Then click the "arrow" which is near to "Menu remove".
        5. It navigate to the Menu remove form page.
        6. First select the menu name which is you want to see.
        7. Then press the "show details" button.
        8. You can see the Menu details such as Menu name, Menu image url, Menu description, and Menu status.
        9. In this form there is true/false option. 
        10. If you want to remove the Menu means change the "true" to "false".
        11. Then click the "Save" button.
    - Expected Result:
        - Menu is removed from the Menu list sucessfully.

### Create a new Category for Menu
- Scenario 1: Successfully Admin create a new Category
    - Steps:
        1. Log in as a admin.(email: vignesh.ramachandran@fssa.freshworks.com, password: Vicky@10)
        2. Click the "profile" icon which is at the top right of the page. Then click the "Admin forms"
        3. It navigate to the forms page.
        4. Then click the "arrow" which is near to "Category add".
        5. It navigate to the Category add form page.
        6. In this form first select the Menu name.
        7. Then enter the Category name in the first box. eg:Ordinary.
        8. Then enter the Category image link(url) in the second box.
        9. Then click the "Create" button.
    - Expected Result:
        - The new Category for select Menu is created and added to the Category data.

### Read Category
- Scenario 1: Successfully Admin can read Category
    - Steps:
        1. Log in as a admin.(email: vignesh.ramachandran@fssa.freshworks.com, password: Vicky@10)
        2. Click the "profile" icon which is at the top right of the page. Then click the "Admin forms"
        3. It navigate to the forms page.
        4. Then click the "arrow" which is near to "Category remove".
        5. It navigate to the Category remove form page.
        6. First select the menu name which is you want to see.
        7. Then click the "show Category" button.
        8. Then select the Category name which is you want to see.
        9. Then click the "show details" button.
        10. You can see the Category details such as Category name, Category image url and Category status.
    - Expected Result:
        - Admin can see the Category details.

### Edit Category
- Scenario 1: Successfully Admin can edit Category
    - Steps:
        1. Log in as a admin.(email: vignesh.ramachandran@fssa.freshworks.com, password: Vicky@10)
        2. Click the "profile" icon which is at the top right of the page. Then click the "Admin forms"
        3. It navigate to the forms page.
        4. Then click the "arrow" which is near to "Category remove".
        5. It navigate to the Category remove form page.
        6. First select the menu name which is you want to see.
        7. Then click the "show Category" button.
        8. Then select the Category name which is you want to see.
        9. Then click the "show details" button.
        10. You can see the Category details such as Category name, Category image url and Category status.
        11. You can edit the Category image url.
        12. Then click the "Save" button.
    - Expected Result:
        - Category details edited (or) updated sucessfully.

### Remove Category
- Scenario 1: Successfully Admin can Remove Category from Category list
    - Steps:
        1. Log in as a admin.(email: vignesh.ramachandran@fssa.freshworks.com, password: Vicky@10)
        2. Click the "profile" icon which is at the top right of the page. Then click the "Admin forms"
        3. It navigate to the forms page.
        4. Then click the "arrow" which is near to "Category remove".
        5. It navigate to the Category remove form page.
        6. First select the menu name which is you want to see.
        7. Then click the "show Category" button.
        8. Then select the Category name which is you want to see.
        9. Then click the "show details" button.
        10. You can see the Category details such as Category name, Category image url and Category status.
        11. In this form there is true/false option.
        12. If you want to remove the Category means change the "true" to "false".
        13. Then click the "Save" button.
    - Expected Result:
        - Category is removed from the Category list sucessfully.

### Create a new Dish for Category
- Scenario 1: Successfully Admin create a new Dish
    - Steps:
        1. Log in as a admin.(email: vignesh.ramachandran@fssa.freshworks.com, password: Vicky@10)
        2. Click the "profile" icon which is at the top right of the page. Then click the "Admin forms"
        3. It navigate to the forms page.
        4. Then click the "arrow" which is near to "Dish add".
        5. It navigate to the Dish add form page.
        6. In this form first select the Menu name.
        7. Then click the "show Category" button.
        8. Then select the Category name which is you want to see.
        9. Then click the plus "+" button how many times means depends upon how many dishes to add.
        10. Then enter the Dish name, and price for the dish.
        11. Then click the "Create" button.
    - Expected Result:
        - The new Dish for selected Category is created and added to the Dish data.

### Read Dish
- Scenario 1: Successfully Admin can read Dish
    - Steps:
        1. Log in as a admin.(email: vignesh.ramachandran@fssa.freshworks.com, password: Vicky@10)
        2. Click the "profile" icon which is at the top right of the page. Then click the "Admin forms"
        3. It navigate to the forms page.
        4. Then click the "arrow" which is near to "Dish remove".
        5. It navigate to the Dish remove form page.
        6. First select the menu name which is you want to see.
        7. Then click the "show Category" button.
        8. Then select the Category name which is you want to see.
        9. Then click the "show dishes" button.
        10. You can see the Dish details such as Dish name,status and Price.
    - Expected Result:
        - Admin can see the Dish details.

### Edit Dish
- Scenario 1: Successfully Admin can edit Dish
    - Steps:
        1. Log in as a admin.(email: vignesh.ramachandran@fssa.freshworks.com, password: Vicky@10)
        2. Click the "profile" icon which is at the top right of the page. Then click the "Admin forms"
        3. It navigate to the forms page.
        4. Then click the "arrow" which is near to "Dish remove".
        5. It navigate to the Dish remove form page.
        6. First select the menu name which is you want to see.
        7. Then click the "show Category" button.
        8. Then select the Category name which is you want to see.
        9. Then click the "show dishes" button.
        10. You can see the Dish details such as Dish name,status and Price.
        11. If you want to edit means click the "checkbox" that which dish you want to edit.
        12. You can edit the Dish price.(once at a time)
        13. Then click the "Save" button.
    - Expected Result:
        - Dish details edited (or) updated sucessfully.

### Remove Dish
- Scenario 1: Successfully Admin can Remove Dish from Dish list
    - Steps:
        1. Log in as a admin.(email: vignesh.ramachandran@fssa.freshworks.com, password: Vicky@10)
        2. Click the "profile" icon which is at the top right of the page. Then click the "Admin forms"
        3. It navigate to the forms page.
        4. Then click the "arrow" which is near to "Dish remove".
        5. It navigate to the Dish remove form page.
        6. First select the menu name which is you want to see.
        7. Then click the "show Category" button.
        8. Then select the Category name which is you want to see.
        9. Then click the "show dishes" button.
        10. You can see the Dish details such as Dish name,status and Price.
        11. In this form there is true/false option.
        12. If you want to remove the Dish means change the "true" to "false".
        13. Then click the "Save" button.
    - Expected Result:
        - Dish is removed from the Dish list sucessfully.

### View list of orders
- Scenario 1: Successfully view list of orders
    - Steps:
        1. Log in as a admin.
        2. Click the "profile" icon which is at the top right of the page. Then click the "Catering orders"
        3. You can see the total orders which is ordered by customers.
        4. You can see the Orders like Not delivered/Delivered/Cancelled.
    - Expected Result:
        - The admin can see the list of orders.
