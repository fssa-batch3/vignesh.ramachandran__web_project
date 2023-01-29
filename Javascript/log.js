// for (let count = 0; count < 2; count++) {
//     console.log("Superstar")
   
//   }

  // for (let i=1;  i<=100; i++) {
  //   console.log(i,"Superstar")
   
  // }

  // for (let i=1;  i<=100; i++) {
  //   if (i % 2 == 0) {
  //     console.log(i,"Rajini")
  //   }
  //   else {
  //     console.log(i,"Superstar")
  //   }
    
  // }

  // for (let i=1; i<=7; i++) {
  //   console.log(i, i, i, i, i, i, i)
  // }
 
//   const n=7;

//   for (let a=1; a<=n; a++) { 
//     let output = " ";
//   for (let b=1; b<=n; b++) {
//     output += a +" ";
//   }
//   console.log(output);
//  }


// const n = 10

// for (let a = 1; a <= n; a++){
//   let output = " ";
//   for (let b=1; b <= a; b++)
//   {
//     output += a+ " ";
//   }
//   console.log(output);
// }
   

    // const n = 5

    // for (let a = 1; a <= n; a++)
    // {
    //   let output = " ";
    //   for (let b=1; b <= a; b++)
    //   {
    //     output += b+ " ";
    //   }
    //   console.log(output);
    // }



    // const n = 5;
    // let string = "";

    // for (let i = 1; i<=n; i++)
    // {
    //   string = string + i + " " ;
    //   console.log(string);
    // }


    // Pongal holiday work

    // 1

    // const n = 4
    // for (let a = 1; a <= n; a++) 
    // {
    //   let output = "  ";
    //   for (let b = a; b>= 1; b--) {
    //   output += b + " ";
    //   }
    //   console.log(output);
    // }

    // let n = 4;
    // let string = "";
    // for (let i = 1; i <= n; i++) 
    // {
    //   for (let j = n; j > i; j--) {
    //       string += "  ";
    //   }
    //   for (let k = i; k >= 1; k--) {
    //       string += k +" ";
    //   }
    //   string += "\n";
    // }
    // console.log(string);

    // 2

    // let n = 4;
    // let string = "";
    // for (let i = 1; i <= n; i++) 
    // {
    //   for (let j = 1; j <= n - i; j++) {
    //   string += ".";
    //   }
    //   for (let k = 1; k <= i; k++) {
    //   string += i + ".";
    //   }
    //   string += "\n";
    // }

    // for (let i = n - 1; i >= 1; i--) 
    // {
    //   for (let j = 1; j <= n - i; j++) {
    //   string += " ";
    //   }
    //   for (let k = 1; k <= i; k++) {
    //   string += i + " ";
    //   }
    //   string += "\n";
    // }
    // console.log(string);
    

    // 3

    // let n = 4;
    // let string = "";
    // for (let i = 1; i <= n; i++) 
    // {
    //   string += " ".repeat(n-i);
    //   for (let j = 1; j <= i; j++) {
    //     string += j + " ";
    //   }
    //   string += "\n";
    // }
    // for (let i = n - 1; i >= 1; i--)
    // {
    //   string += " ".repeat(n-i);
    //   for (let j = 1; j <= i; j++) {
    //     string += j + " ";
    //   }
    //   string += "\n";
    // }   
    // console.log(string);
    

    // 4

    // for( let i = 1; i<=15 ; i++)
    // {
    //     if (i % 5 === 0 && i % 3 === 0){
    //     console.log("Superstar Ranjinikanth");
    //     }
    //     else if (i % 5 === 0){
    //     console.log("Ranjinikanth");
    //     }
    //     else if (i % 3 === 0){
    //     console.log("Superstar");
    //     }
    //     else{
    //     console.log(i)
    //     }
    // }

    // n=5 (1 2 3 4 5)
    // let n=5;
    // let x = "";
    // for (i=1; i<=n; i++)
    // {
    //   x = x + i+ " ";
    // }
    // console.log(x);

    // n=5 (5 4 3 2 1)
    // let n=5;
    // let x = "";
    // for (i=1; i<=n; i++)
    // {
    //   x = i+ " "+x;
    // }
    // console.log(x);

    // n=7 (1 3 5 7)
    // let n=7;
    // let x =" ";
    // for (i=1; i<=n; i+=2)
    // {
    //   x = x + i + " ";
    // }
    // console.log(x);

    // n=5 (1 2 3 4 5 4 3 2 1)
    // let x = "";
    // for (i=1; i<=5; i++)
    // {
    //   x = x + i + " ";
    // }

    // for (i=4; i>=1; i--)
    // {
    //   x = x + i + " ";
    // }
    // console.log(x);


  // let n=4;
  // let x = "";
  // for(i=1; i<=4; i++)
  // {
  //   console.log(i);
  // }
  
  // let n=4;
  // let x = "";

  // for (i=1; i<=n; i++)
  // {
  //   for(j=1; j<=n-i; j++)
  //   {
  //     x = x + ".";
  //   }
  //   for(k=1; k<=i; k++)
  //   {
  //     x = x + k ;
  //   }
    
  //     x += "\n";

  // }

  //   console.log(x);

  
  let n = 4;
  let x = "";
  for(i=1; i<=n; i++)
  {
    for(j=n; j>i; j--)
    {
      x += "..";
    }
    for(k=1; k<=i; k++)
    {
      x += k + " ";
    }
    for(l=i-1; l>=1; l--)
    {
      x += l + " ";
    }

    x += "\n";
  }

  for(a=1; a<n; a++)
  {
    for(b=1; b<=a; b++)
    {
      x += "..";
    }
    for(c=1; c<=n-a; c++)
    {
      x += c + " ";
    }
    for(d=n-a-1; d>=1; d--)
    {
      x+= d + " ";
    }
    x += "\n";
  }
  console.log(x);

  
  
  
    
    

    

      