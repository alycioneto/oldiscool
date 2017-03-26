
function validacaoForm(){
  var senha = document.forms['formAdmin']['password'].value;
  var email = document.forms['formAdmin']['email'].value;
  if (senha != 'senha' || email != 'email@email.com') {
      alert("Erro, senha/email incorretos");
      return false;
  }
}
