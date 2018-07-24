function validar(n)
{
  return typeof n === 'number';
  
}

function multiplicarInteiros(n)
{
  var multi=1;
  
  if(validar(n))
   {
     
     for(var x=2;x<=n;x++)
        multi *= x;
     
     if(n===0)
       multi = 0;
      
     return multi;
   }
}