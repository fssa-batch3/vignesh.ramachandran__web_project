// let n = 3;
// let x = "";
// for(i=1; i<=n; i++)
// {
//     for(j=1; j<=i; j++)
//     {
//         x += j + ".";
//     }


//     for(l=i; l>=1; l--)
//     {
//         x += "." + l ;
//     }
//     x += "\n";
// }
// console.log(x);


let j=3;
for(k=1; k<=j; k++){
  let n = j-k+1;
  series(n);
}

function series(n){
  let x = "";
  for(i=1; i<=n; i++)
  {
    x += i + ".";
  }
  console.log(x);
}

