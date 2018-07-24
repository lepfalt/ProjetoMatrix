function validar(n)
{
  return typeof n === 'number';
}


function somarInteiros(n)
{
  var soma=0;
  
  if(validar(n))
    {
      for(var x=1;x<=n;x++)
        soma += x;
      return soma;
    }
}