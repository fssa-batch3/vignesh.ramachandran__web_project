const menuData = JSON.parse(localStorage.getItem("menuData"));

if (menuData) {
    return
}
else {
    localStorage.setItem("menuData", JSON.stringify(
        [
            {
                categoryImage: "https://iili.io/HWh0ZrB.jpg",
                categoryName: "Ordinary",
                id: "1",
                menuType: "1",
                status: "true",
            },
            {
                categoryImage: "https://iili.io/HWh0b71.png",
                categoryName : "Special",
                id: "2",
                menuType: "1",
                status: "true",
            },
            {
                categoryImage: "https://iili.io/HWh0DdP.jpg",
                categoryName : "VIP",
                id: "3",
                menuType: "1",
                status: "true",
            }
        ]
    ))
}


const categoryData = JSON.parse(localStorage.getItem("categoryData"));

if(categoryData){
    return
}
else{
    localStorage.setItem("categoryData", JSON.stringify(

        [
            {"menuType":"1","categoryName":"Ordinary","id":"1","categoryImage":"https://iili.io/HWh0ZrB.jpg","status":"true"},
            {"menuType":"1","categoryName":"Special","id":"2","categoryImage":"https://iili.io/HWh0b71.png","status":"true"},
            {"menuType":"1","categoryName":"VIP","id":"3","categoryImage":"https://iili.io/HWh0DdP.jpg","status":"true"}
        ]

    ))
    
}


const dishData = JSON.parse(localStorage.getItem("dishData"));

if(dishData){
    return
}
else{
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


const transactionTablel = JSON.parse(localStorage.getItem("transactionTable"));

if(transactionTablel){
    return
}

else{
    localStorage.setItem("transactionTablel", JSON.stringify(

        [{"menuType":"1","categoryType":"1","dish":1,"status":"true"},{"menuType":"1","categoryType":"1","dish":2,"status":"true"},{"menuType":"1","categoryType":"1","dish":3,"status":"true"},{"menuType":"1","categoryType":"1","dish":4,"status":"true"},{"menuType":"1","categoryType":"2","dish":5,"status":"true"},{"menuType":"1","categoryType":"2","dish":6,"status":"true"},{"menuType":"1","categoryType":"2","dish":7,"status":"true"},{"menuType":"1","categoryType":"1","dish":8,"status":"true"},{"menuType":"1","categoryType":"1","dish":9,"status":"true"},{"menuType":"1","categoryType":"1","dish":10,"status":"true"},{"menuType":"1","categoryType":"1","dish":11,"status":"true"},{"menuType":"1","categoryType":"1","dish":12,"status":"true"},{"menuType":"1","categoryType":"1","dish":13,"status":"true"},{"menuType":"1","categoryType":"1","dish":14,"status":"true"},{"menuType":"1","categoryType":"2","dish":15,"status":"true"},{"menuType":"1","categoryType":"2","dish":16,"status":"true"},{"menuType":"1","categoryType":"2","dish":17,"status":"true"},{"menuType":"1","categoryType":"2","dish":18,"status":"true"},{"menuType":"1","categoryType":"2","dish":19,"status":"true"},{"menuType":"1","categoryType":"2","dish":20,"status":"true"},{"menuType":"1","categoryType":"2","dish":21,"status":"true"},{"menuType":"1","categoryType":"2","dish":22,"status":"true"},{"menuType":"1","categoryType":"2","dish":23,"status":"true"},{"menuType":"1","categoryType":"2","dish":24,"status":"true"}]
    
    ))
}


