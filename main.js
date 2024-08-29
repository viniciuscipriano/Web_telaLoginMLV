function login(){
    const senha = document.getElementById("senha").value;
    const email = document.getElementById("email").value;
    const errorMessage = document.getElementById("erroMensagem");

    const validPassword = "oioi";
    const validUsername = "lamavi@gmail.com";

    if (senha == validPassword && email == validUsername) {
        alert("Parabéns, login realizado com sucesso :)");
        window.location.href = "https://www.amazon.com.br"
    }
    else {
        errorMessage.textContent = "Login e senha errados, que pena :(" ;
    }
    return false
}