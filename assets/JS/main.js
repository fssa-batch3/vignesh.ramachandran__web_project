// const menuData = JSON.parse(localStorage.getItem("menuData"));

if(!menuData){

    localStorage.setItem("menuData", JSON.stringify(
        
        [
            {"menuName":"Breakfast","id":"1","image":"https://iili.io/HWhcQZx.jpg","status":"true","description":"SR Catering Service offers best breakfast menu that is available for all parties and weddings; we also assist customers to create a personalized menu just according to client’s taste and perfect for the occasion"},
            {"menuName":"Lunch","id":"2","image":"https://iili.io/HWhlhPV.jpg","status":"true","description":"SR Catering Service provides delicious lunch menu that suits all functions and parties; we also allow clients to create a personalized menu just according to their taste, budget"},
            {"menuName":"Hightea","id":"3","image":"https://iili.io/HWhlXMQ.jpg","status":"true","description":"SR Catering Service gives evening tea and snacks menu which is available for all functions; we also help customers to create a personalized menu just according to client’s taste and perfect for the occasion"},
            {"menuName":"Dinner","id":"4","image":"https://iili.io/HWhlwKB.jpg","status":"true","description":"SR Catering Service present a detailed dinner menu which is available for all parties, wedding and reception; we also aid customers to create a personalized and special menu just according to the taste and budget"},
        ]

    ))
}


const categoryData = JSON.parse(localStorage.getItem("categoryData"));

if(!categoryData){

    localStorage.setItem("categoryData", JSON.stringify(

        [
            {"menuType":"1","categoryName":"Ordinary","id":"1","categoryImage":"https://iili.io/HWh0ZrB.jpg","status":"true"},
            {"menuType":"1","categoryName":"Special","id":"2","categoryImage":"https://iili.io/HWh0b71.png","status":"true"},
            {"menuType":"1","categoryName":"VIP","id":"3","categoryImage":"https://iili.io/HWh0DdP.jpg","status":"true"}
        ]

    ))
    
}


const dishData = JSON.parse(localStorage.getItem("dishData"));


if(!dishData){

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
            {"name":"SAMBAR","id":20,"price":"0","status":"true"},
            {"name":"COCONUT CHUTNY","id":21,"price":"0","status":"true"},
            {"name":"TOMATO CHUTNY","id":22,"price":"0","status":"true"},
            {"name":"MINERAL WATER (1)","id":23,"price":"10","status":"true"},
            {"name":"BANANA LEAF (1)","id":24,"price":"5","status":"true"}
        ]
    ))

}


const transactionTable = JSON.parse(localStorage.getItem("transactionTable"));

if(!transactionTable){

    localStorage.setItem("transactionTable", JSON.stringify(

        [{"menuType":"1","categoryType":"1","dish":1,"status":"true"},{"menuType":"1","categoryType":"1","dish":2,"status":"true"},{"menuType":"1","categoryType":"1","dish":3,"status":"true"},{"menuType":"1","categoryType":"1","dish":4,"status":"true"},{"menuType":"1","categoryType":"2","dish":5,"status":"true"},{"menuType":"1","categoryType":"2","dish":6,"status":"true"},{"menuType":"1","categoryType":"2","dish":7,"status":"true"},{"menuType":"1","categoryType":"1","dish":8,"status":"true"},{"menuType":"1","categoryType":"1","dish":9,"status":"true"},{"menuType":"1","categoryType":"1","dish":10,"status":"true"},{"menuType":"1","categoryType":"1","dish":11,"status":"true"},{"menuType":"1","categoryType":"1","dish":12,"status":"true"},{"menuType":"1","categoryType":"1","dish":13,"status":"true"},{"menuType":"1","categoryType":"1","dish":14,"status":"true"},{"menuType":"1","categoryType":"2","dish":15,"status":"true"},{"menuType":"1","categoryType":"2","dish":16,"status":"true"},{"menuType":"1","categoryType":"2","dish":17,"status":"true"},{"menuType":"1","categoryType":"2","dish":18,"status":"true"},{"menuType":"1","categoryType":"2","dish":19,"status":"true"},{"menuType":"1","categoryType":"2","dish":20,"status":"true"},{"menuType":"1","categoryType":"2","dish":21,"status":"true"},{"menuType":"1","categoryType":"2","dish":22,"status":"true"},{"menuType":"1","categoryType":"2","dish":23,"status":"true"},{"menuType":"1","categoryType":"2","dish":24,"status":"true"}]
    
    ))
}

