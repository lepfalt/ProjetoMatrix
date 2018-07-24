function somarImpares(n)
{
  var num = -1;
  var soma = 0;
  
  function somar(n)
  {
    num += 2;
    
    if(n === 1)
      return num;
  
    return num + somar(n-1);
  }
  
  if(validar(n))
    {
      if(n===0)
        return 0;
      
      return somar(n);
    }
}

function validar(n)
{
  return typeof n === 'number' && Number.isInteger(n);
}