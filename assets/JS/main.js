// const menuData = JSON.parse(localStorage.getItem("menuData"));

if (!menuData) {

    localStorage.setItem("menuData", JSON.stringify(

        [
            { "menuName": "Breakfast", "id": "1", "image": "https://iili.io/HWhcQZx.jpg", "status": "true", "description": "SR Catering Service offers best breakfast menu that is available for all parties and weddings; we also assist customers to create a personalized menu just according to client’s taste and perfect for the occasion" },
            { "menuName": "Lunch", "id": "2", "image": "https://iili.io/HWhlhPV.jpg", "status": "true", "description": "SR Catering Service provides delicious lunch menu that suits all functions and parties; we also allow clients to create a personalized menu just according to their taste, budget" },
            { "menuName": "Hightea", "id": "3", "image": "https://iili.io/HWhlXMQ.jpg", "status": "true", "description": "SR Catering Service gives evening tea and snacks menu which is available for all functions; we also help customers to create a personalized menu just according to client’s taste and perfect for the occasion" },
            { "menuName": "Dinner", "id": "4", "image": "https://iili.io/HWhlwKB.jpg", "status": "true", "description": "SR Catering Service present a detailed dinner menu which is available for all parties, wedding and reception; we also aid customers to create a personalized and special menu just according to the taste and budget" },
            { "menuName": "Custom", "id": "5", "image": "https://iili.io/HWhlEAu.png", "status": "false", "description": "SR Catering Service is offering a wide range of vegetarian and non vegetarian menus, also includes chinese varieties of noodles, fried rice, gravy etc... we also assist customers to create a personalized and special menu just according to the taste, budget and perfect for the occasion" }
        ]


    ))
}


const categoryData = JSON.parse(localStorage.getItem("categoryData"));

if (!categoryData) {

    localStorage.setItem("categoryData", JSON.stringify(

        [
            { "menuType": "1", "categoryName": "Ordinary", "id": "1", "categoryImage": "https://iili.io/HWh0ZrB.jpg", "status": "true" }, 
            { "menuType": "1", "categoryName": "Special", "id": "2", "categoryImage": "https://iili.io/HWh0b71.png", "status": "true" }, 
            { "menuType": "1", "categoryName": "VIP", "id": "3", "categoryImage": "https://iili.io/HWh0DdP.jpg", "status": "true" }, 
            { "menuType": "2", "categoryName": "Ordinary", "id": "1", "categoryImage": "https://iili.io/HWhX7YQ.jpg", "status": "true" }, 
            { "menuType": "2", "categoryName": "Special", "id": "2", "categoryImage": "https://iili.io/HWhXYvV.jpg", "status": "true" }, 
            { "menuType": "2", "categoryName": "VIP", "id": "3", "categoryImage": "https://iili.io/HWhXayB.jpg", "status": "true" }, 
            { "menuType": "3", "categoryName": "Ordinary", "id": "1", "categoryImage": "https://iili.io/HWhhclf.jpg", "status": "true" }, 
            { "menuType": "3", "categoryName": "Special", "id": "2", "categoryImage": "https://iili.io/HWhhlS4.jpg", "status": "true" }, 
            { "menuType": "3", "categoryName": "VIP", "id": "3", "categoryImage": "https://iili.io/HWhh1Hl.jpg", "status": "true" }, 
            { "menuType": "4", "categoryName": "Ordinary", "id": "1", "categoryImage": "https://iili.io/HWhwHhP.jpg", "status": "true" }, 
            { "menuType": "4", "categoryName": "Special", "id": "2", "categoryImage": "https://iili.io/HWhw9TB.jpg", "status": "true" }, 
            { "menuType": "4", "categoryName": "VIP", "id": "3", "categoryImage": "https://iili.io/HWhwJQ1.jpg", "status": "true" }
        ]

    ))

}


const dishData = JSON.parse(localStorage.getItem("dishData"));


if (!dishData) {

    localStorage.setItem("dishData", JSON.stringify(

        [
            {"name":"MINI LADDU (1)","id":1,"price":"10","status":"true"},
            {"name":"IDLY (2)","id":2,"price":"15","status":"true"},
            {"name":"KITCHADI","id":3,"price":"30","status":"true"},
            {"name":"VADA (1)","id":4,"price":"10","status":"true"},
            {"name":"PINEAPPLE PUDDING","id":5,"price":"20","status":"true"},
            {"name":"KUSHBOO IDLY (2)","id":6,"price":"15","status":"true"},
            {"name":"PONGAL","id":7,"price":"30","status":"true"},
            {"name":"POORI (2) - VEG GRAVY","id":8,"price":"30","status":"true"},
            {"name":"MINI UTTAPPAM(2)","id":9,"price":"30","status":"true"},
            {"name":"SAMBAR","id":10,"price":"0","status":"true"},
            {"name":"COCONUT CHUTNY","id":11,"price":"0","status":"true"},
            {"name":"HOT MILK (OR) COFFEE(1)","id":12,"price":"10","status":"true"},
            {"name":"MINERAL WATER (1)","id":13,"price":"10","status":"true"},
            {"name":"BANANA LEAF","id":14,"price":"5","status":"true"},
            {"name":" ONION VADA (1)","id":15,"price":"10","status":"true"},
            {"name":"POORI - CHENNA MASALA(2)","id":16,"price":"30","status":"true"},
            {"name":"IDIYAPPAM - COCONUT MILK(2)","id":17,"price":"30","status":"true"},
            {"name":"ONION UTTAPPAM (2)","id":18,"price":"40","status":"true"},
            {"name":"COFFEE (OR) TEA (1)","id":19,"price":"10","status":"true"},
            {"name":"SAMBAR","id":20,"price":"0","status":"true"},{"name":"COCONUT CHUTNY","id":21,"price":"0","status":"true"},{"name":"TOMATO CHUTNY","id":22,"price":"0","status":"true"},{"name":"MINERAL WATER (1)","id":23,"price":"10","status":"true"},{"name":"BANANA LEAF (1)","id":24,"price":"5","status":"true"},{"name":"RASAGULLA (1)","id":25,"price":"15","status":"true"},{"name":"MASALA IDLY (2)","id":26,"price":"20","status":"true"},{"name":"GHEE PONGAL","id":27,"price":"35","status":"true"},{"name":"SPECIAL VADA (OR) BONDA (1)","id":28,"price":"10","status":"true"},{"name":"MASALA DOSA (2)","id":29,"price":"40","status":"true"},{"name":"POORI - VADA CURRY (2)","id":30,"price":"40","status":"true"},{"name":"IDIYAPPAM - COCONUT MILK (2)","id":31,"price":"30","status":"true"},{"name":"KITCHADI","id":32,"price":"30","status":"true"},{"name":"SPECIAL SAMBAR","id":33,"price":"0","status":"true"},{"name":"COCONUT CHUTNY","id":34,"price":"0","status":"true"},{"name":"POTHINA CHUTNY","id":35,"price":"0","status":"true"},{"name":"TOMATO CHUTNY","id":36,"price":"0","status":"true"},{"name":"MASALA MILK (1)","id":37,"price":"15","status":"true"},{"name":"MINERAL WATER (1)","id":38,"price":"10","status":"true"},{"name":"BANANA LEAF (1)","id":39,"price":"5","status":"true"},{"name":"TISSUE PAPER","id":40,"price":"0","status":"true"}
        ]

    ))

}


const transactionTable = JSON.parse(localStorage.getItem("transactionTable"));

if (!transactionTable) {

    localStorage.setItem("transactionTable", JSON.stringify(

        [{"menuType":"1","categoryType":"1","dish":1,"status":"true"},{"menuType":"1","categoryType":"1","dish":2,"status":"true"},{"menuType":"1","categoryType":"1","dish":3,"status":"true"},{"menuType":"1","categoryType":"1","dish":4,"status":"true"},{"menuType":"1","categoryType":"2","dish":5,"status":"true"},{"menuType":"1","categoryType":"2","dish":6,"status":"true"},{"menuType":"1","categoryType":"2","dish":7,"status":"true"},{"menuType":"1","categoryType":"1","dish":8,"status":"true"},{"menuType":"1","categoryType":"1","dish":9,"status":"true"},{"menuType":"1","categoryType":"1","dish":10,"status":"true"},{"menuType":"1","categoryType":"1","dish":11,"status":"true"},{"menuType":"1","categoryType":"1","dish":12,"status":"true"},{"menuType":"1","categoryType":"1","dish":13,"status":"true"},{"menuType":"1","categoryType":"1","dish":14,"status":"true"},{"menuType":"1","categoryType":"2","dish":15,"status":"true"},{"menuType":"1","categoryType":"2","dish":16,"status":"true"},{"menuType":"1","categoryType":"2","dish":17,"status":"true"},{"menuType":"1","categoryType":"2","dish":18,"status":"true"},{"menuType":"1","categoryType":"2","dish":19,"status":"true"},{"menuType":"1","categoryType":"2","dish":20,"status":"true"},{"menuType":"1","categoryType":"2","dish":21,"status":"true"},{"menuType":"1","categoryType":"2","dish":22,"status":"true"},{"menuType":"1","categoryType":"2","dish":23,"status":"true"},{"menuType":"1","categoryType":"2","dish":24,"status":"true"},{"menuType":"1","categoryType":"3","dish":25,"status":"true"},{"menuType":"1","categoryType":"3","dish":26,"status":"true"},{"menuType":"1","categoryType":"3","dish":27,"status":"true"},{"menuType":"1","categoryType":"3","dish":28,"status":"true"},{"menuType":"1","categoryType":"3","dish":29,"status":"true"},{"menuType":"1","categoryType":"3","dish":30,"status":"true"},{"menuType":"1","categoryType":"3","dish":31,"status":"true"},{"menuType":"1","categoryType":"3","dish":32,"status":"true"},{"menuType":"1","categoryType":"3","dish":33,"status":"true"},{"menuType":"1","categoryType":"3","dish":34,"status":"true"},{"menuType":"1","categoryType":"3","dish":35,"status":"true"},{"menuType":"1","categoryType":"3","dish":36,"status":"true"},{"menuType":"1","categoryType":"3","dish":37,"status":"true"},{"menuType":"1","categoryType":"3","dish":38,"status":"true"},{"menuType":"1","categoryType":"3","dish":39,"status":"true"},{"menuType":"1","categoryType":"3","dish":40,"status":"true"}]
    ))
}

const orderData = JSON.parse(localStorage.getItem("orderData"));

if(!orderData){
    localStorage.setItem("orderData",JSON.stringify(

        [
            {"order_id":"7082295e-8b05-4b59-a38a-ee0f3de0d53a",
            "name":"Vignesh",
            "user_id":"vignesh.ramachandran@fssa.freshworks.com",
            "phone_number":"1234567890",
            "address":"asdf",
            "dateOfDelivery":"2023-04-05",
            "order_date":"28/03/2023 01:31:58PM",
            "ordered_product":
                    [
                        {"menu_id":"1",
                        "category_id":"1",
                        "dishData":[
                            {"id":1},{"id":2},{"id":3},{"id":4},{"id":8},{"id":9},{"id":10},{"id":11},{"id":12},{"id":13},{"id":14}
                        ],"no_of_guest":"10","price":1500}
                    ],
            "totalCost":1500,
            "orderStatus":"Delivered"},
            {"order_id":"05f47dfd-a8a1-4cb5-8a07-d5d3a2a921d8","name":"Varun.SR","user_id":"srvarun@gmail.com","phone_number":"1234567891","address":"       ","dateOfDelivery":"2023-04-15","order_date":"07/04/2023 12:10:09PM","ordered_product":[{"menu_id":"1","category_id":"1","dishData":[{"id":1},{"id":2},{"id":3},{"id":4},{"id":8},{"id":9},{"id":10},{"id":11},{"id":12},{"id":13},{"id":14}],"no_of_guest":"1","price":150}],"totalCost":150,"orderStatus":"Delivered"},
            {"order_id":"f9c8e004-f1e6-4154-a223-fe4db1ab521e","name":"Varun.SR","user_id":"srvarun@gmail.com","phone_number":"1234567891","address":"asdfasdf","dateOfDelivery":"2023-04-18","order_date":"10/04/2023 01:55:15PM","ordered_product":[{"menu_id":"1","category_id":"1","dishData":[{"id":1},{"id":2},{"id":3},{"id":4},{"id":8},{"id":9},{"id":10},{"id":11},{"id":12},{"id":13},{"id":14}],"no_of_guest":"10","price":1500}],"totalCost":1500,"orderStatus":"Not Delivered"},
            {"order_id":"5fc81280-9a3d-4fd2-bd07-3c01aa4bd489","name":"Varun.SR","user_id":"srvarun@gmail.com","phone_number":"1234567891","address":"Sivan kovil street, Kumbakonam-612001","dateOfDelivery":"2023-04-18","order_date":"10/04/2023 01:58:16PM","ordered_product":[{"menu_id":"1","category_id":"2","dishData":[{"id":5},{"id":6},{"id":7},{"id":15},{"id":16},{"id":17},{"id":18},{"id":19},{"id":20},{"id":21},{"id":22},{"id":23},{"id":24}],"no_of_guest":"10","price":2000},{"menu_id":"1","category_id":"3","dishData":[{"id":25},{"id":26},{"id":27},{"id":28},{"id":29},{"id":30},{"id":31},{"id":32},{"id":33},{"id":34},{"id":35},{"id":36},{"id":37},{"id":38},{"id":39},{"id":40}],"no_of_guest":"20","price":5000}],"totalCost":7000,"orderStatus":"Not Delivered"},
            {"order_id":"d3923289-4246-4d28-a2fc-69e9da980da5","name":"Vignesh","user_id":"vignesh.ramachandran@fssa.freshworks.com","phone_number":"1234567890","address":"Thanjavur","dateOfDelivery":"2023-04-18","order_date":"10/04/2023 06:00:41PM","ordered_product":[{"menu_id":"1","category_id":"3","dishData":[{"id":25},{"id":26},{"id":27},{"id":28},{"id":29},{"id":30},{"id":31},{"id":32},{"id":33},{"id":34},{"id":35},{"id":36},{"id":37},{"id":38},{"id":39},{"id":40}],"no_of_guest":"10","price":2500},{"menu_id":"1","category_id":"2","dishData":[{"id":5},{"id":6},{"id":7},{"id":15},{"id":16},{"id":17},{"id":18},{"id":19},{"id":20},{"id":21},{"id":22},{"id":23},{"id":24}],"no_of_guest":"10","price":2000},{"menu_id":"1","category_id":"1","dishData":[{"id":1},{"id":2},{"id":3},{"id":4},{"id":8},{"id":9},{"id":10},{"id":11},{"id":12},{"id":13},{"id":14}],"no_of_guest":"10","price":1500}],"totalCost":6000,"orderStatus":"Not Delivered"},{"order_id":"7bc2eba6-6ec0-4f4b-9591-0f4445b5d832","name":"Vignesh","user_id":"vignesh.ramachandran@fssa.freshworks.com","phone_number":"1234567890","address":"fcgvhbjnk","dateOfDelivery":"2023-04-24","order_date":"15/04/2023 09:40:05PM","ordered_product":[{"menu_id":"1","category_id":"1","dishData":[{"id":1},{"id":2},{"id":3},{"id":4},{"id":8},{"id":9},{"id":10},{"id":11},{"id":12},{"id":13},{"id":14}],"no_of_guest":"1","price":150}],"totalCost":150,"orderStatus":"Not Delivered"}
        
        ]

    ))
}
