function criptografar() {
    var textoOriginal = document.getElementById("texto").value;
  
    if (textoOriginal.trim() === "") {
        alert("Digite um texto para criptografar.");
        return;
    }
  
    var mensagem = btoa(textoOriginal);
    document.getElementById("resultado").textContent = "Texto Criptografado: " + mensagem;
  }
  
  function descriptografar() {
    var mensagem  = document.getElementById("texto").value;
  
    if (mensagem .trim() === "") {
        alert("Digite um texto para descriptografar.");
        return;
    }
  
    try {
        var textoOriginal = atob(mensagem );
        document.getElementById("resultado").textContent = "Texto Descriptografado: " + textoOriginal;
    } catch (error) {
        alert("Erro ao descriptografar. Certifique-se de que o texto é válido.");
    }
  }
  
  
  