/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function exibirPesquisa()
    {
        var cra = document.getElementById("cra").value;
     
    if (cra!=null)
               {
                   window.location.href="exame.html"  
               }       
        else{
            
            window.alert("CRA Incorreto");
            login="";
            senha="";
        }



}

function notificar()
    {
        var nome,sobrenome,cra,consulta;
        nome=document.getElementById("nome").value;
        sobrenome=document.getElementById("sobrenome").value;
        cra=document.getElementById("cra").value;
        consulta=document.getElementById("consulta").value;
        
        if(nome!="" && sobrenome!="" && cra!="" && consulta !="")
        {
            window.alert("Dados Cadastrados : \n Nome:"+nome+"\n Sobrenome:"+sobrenome+"\n CRA:"+cra+"\n Consulta:"+consulta);
        }
}