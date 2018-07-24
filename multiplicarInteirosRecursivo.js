function multiplicarInteiros(n)
{ 
  if(validar(n))
    {
      if(n === 1 || n === 0)
        return n;
      return n * multiplicarInteiros(n-1);
    }
}

function validar(n)
{
  return typeof n === 'number' && Number.isInteger(n);
}