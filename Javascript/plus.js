let n=3;
let x = "";
for(i=1; i<=n; i++)
{
  for(j=1; j<=n; j++)
  {
     x += "..";
  }
  for(k=1; k<=1; k++){
    x += k + ".";
  }
    x += "\n";
 }

    for(a=1; a<=n; a++)
    {
    x += n + ".";
    }
    for(b=1; b<=1; b++)
    {
        x += b + ".";
    }
    for(a=1; a<=n; a++)
    {
        x += n +".";
    }
        x += "\n";
  
  for(p=1; p<=n; p++)
{
  for(q=1; q<=n; q++)
  {
     x += "..";
  }
  for(r=1; r<=1; r++){
    x += r + ".";
  }
    x += "\n";
 }
  console.log(x);