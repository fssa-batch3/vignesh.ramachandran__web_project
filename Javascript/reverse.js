let n = 5;
let x = "";
for (i=1; i<=5; i++)
{
    for(j=1; j<=i; j++)
    {
        x += ".";
    }
    for(k=n-i+1; k>=1; k--)
    {
        x += k;
    }
    x += "\n";
}
    console.log(x);


// let n = 5;
// let x = "";
// for(i=1; i<=5; i++)
// {
//     for(j=1; j<=i; j++)
//     {
//         x += ".";
//     }
//     for(k=i; k<=n; k++){
//       x += k ;
//     }
//     x += "\n";
// }
//   console.log(x);


