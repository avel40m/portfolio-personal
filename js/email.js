function sendEmail(){
     (function(){
        emailjs.init("dqtWGToLikAlellgT")
    })()
    var from_name = document.getElementById("from_name").value;
    var to_phone = document.getElementById("to_phone").value;
    var issue = document.getElementById("issue").value;
    var message = document.getElementById("message").value;
    var reply_to = document.getElementById("reply_to").value;


    if(from_name.length <= 4) 
        return alert("El nombre tiene que ser mayor a 4");
    if(to_phone.length <= 8 && !contieneSoloNumeros(to_phone)) 
        return alert("El número tiene que ser mayor a 8 y permite solo número");
    if(!validateEmail(reply_to))
        return alert("El email es incorrecto");
    if(issue.length <= 4) 
        return alert("El tema tiene que ser mayor a 4");
    if(message.length == 0) 
        return alert("El mensaje es obligatorio");

    var params = {from_name, to_phone, issue, message, reply_to};

    var serviceId = "service_o3evoo9";
    var templateId = "template_m8d4u6o";
    
    emailjs.send(serviceId, templateId, params)
        .then( res => alert("Mensaje enviado correctamente"))
        .catch(error => console.error(error));

    document.getElementById("from_name").value = "";
    document.getElementById("to_phone").value = ""
    document.getElementById("issue").value = ""
    document.getElementById("message").value = ""
    document.getElementById("reply_to").value = ""
}

const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

function contieneSoloNumeros(cadena) {
    const regex = /^\d+$/;
    return regex.test(cadena);
}