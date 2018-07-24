function somaInteiros(n)
{
  function somar(n){
    
    if(n === 1 || n === 0)
        return n;
    
    return n + somar(n-1);
  }
  
  if(validar(n))
    {
      return somar(n);
    }
}

function validar(n)
{
  return typeof n === 'number'&& Number.isInteger(n);
}