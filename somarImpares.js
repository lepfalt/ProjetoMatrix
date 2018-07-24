function  somarImpares(n)
{
  var num = 1;
  var soma = 0;
  
  if(validar(n))
  {
    for(var x=1;x<=n;x++)
    {
      soma += num;
      num += 2;
    }
    return soma;
  }
}

function validar(n)
{
  return typeof n === 'number';
}