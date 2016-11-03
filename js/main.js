function traductor (){
	
	//Encabezado
	var encabezado=document.getElementById('form-signin-heading');
	var nuevoEncabezado='Por favor inicia sesión';
	titulo.innerHTML=nuevoEncabezado;
	//Email 
	var mail=document.getElementById('inputEmail');
	mail.placeholder='Correo electronico';
	//Clave
	var clave=document.getElementById('inputPassword');
	clave.placeholder='contraseña';
	//Recordatorio 
	var recordatorio=document.getElementByTagName('span')[0];
	var nuevoRecordatorio='recordar datos'
	recordatorio.innerHTML=nuevoRecordatorio;
	//Envio 
	var envio=document.getElementsByClassName('btn')[0];
	var nuevoEnvio='inicia sesion';
	envio.innerHTML=nuevoEnvio;



}