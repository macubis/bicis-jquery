function validateForm(){
		/*se trae los valor de los input del formulario*/

		var nombre = $("#name").val();
		var apellido = $("#lastname").val();
		var mail = $("#input-email").val();
		var pass = $("#input-password").val();
		

		function valNombre(){
			if(nombre == ""){
				alert("ingrese nombre");
				return false;
			}else if(!/^([a-zA-Z])*$/.test(nombre)){
				alert("ingrese Nombre, no numeros");
				return false;
			}
		}
		valNombre();
	
		function valApellido(){
			if( apellido == ""){ 
				alert("ingrese apellido");
				return false;
			}else if(!/^([a-zA-Z])*$/.test(apellido)){
				alert("Ingrese Apellido, no numeros")
				return false;
			}
		}
		valApellido();
		
		function valCorreo(){
			if(mail == ""){ 
				alert("ingrese correo");
				return false;
			}else if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(mail))){
				alert("Ingrese correo que sea verdadero valido");
				return false;
			}
		}
		valCorreo();
		//password
		function valPass(){
			if(pass == ""){ 
				alert("ingrese Contraseña");
				return false;
			}else if(pass.length < 6){
				alert("ingrese maximo 6 numeros");
				return false;
			}
		}
		valPass();
		
		function validacionSelect(){//no corre :(((((((((((
			if(selct == ""){ 
				$(inputCinco).append("<span>Campo obligatorio</span>");
				return false;
			}
		}
		validacionSelect();
	
}
