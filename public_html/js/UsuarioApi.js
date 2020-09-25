var url = "http://localhost:8000";

//essa função lista os usuários
function getUsuarios(){
    
   var data =new FormData();
   var xhr = new XMLHttpRequest();
   //xhr.withCredentials = true;
   
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var usuarios = JSON.parse(this.responseText);
            //Faça algo
            exibirUsuarios(usuarios);
        }
    });
     xhr.open("GET", url);

    xhr.send(data);
}

//essa função adiociona um novo usuário
function adicionarUsuario(objUsuario)
   {
    var xhr = new XMLHttpRequest();
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var usuario = JSON.parse(this.responseText);
            //Faça algo
            alert("Usuário adicionado");
        }
    });
    
    xhr.open("Post", url);
    xhr.send(JSON.stringify(objUsuario));
    
   }

