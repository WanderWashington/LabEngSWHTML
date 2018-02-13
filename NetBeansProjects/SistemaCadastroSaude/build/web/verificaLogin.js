/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function autentica()
    {
        var login = document.getElementById("usuario").value;
        var senha = document.getElementById("senha").value;
       
    if (login =='paciente' && senha=='123')
               {
                   window.location.href="paginaUsuario.html"  
               }        
       else if(login=='medico' && senha=='123')
            {
                
                 window.location.href="paginaMedico.html" 
            }
        else if (login=='admin' && senha=='123')
            {
                window.location.href="paginaPrincipal.html"
            }
        else{
            
            window.alert("O usuário ou senha incorretos");
            login="";
            senha="";
        }

}
      

