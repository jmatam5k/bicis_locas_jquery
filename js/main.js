function validateForm(){
	//variables globales:
	var nombre = $('#name').val();
	var apellido = $('#lastname').val();
	var email = $('#input-email').val();
	var pass = $('#input-password').val();
	var indice = $('select').val();
	var tw= $('#input-social').val();
	/*Paso1: Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
	Para los campos nombre y apellido la primera letra debe ser mayúscula*/
	function nomBre(){
		if( nombre.value == null || nombre.value.length == 0 || /^\s+$/.test(nombre.value) ) {
			//alert("Favor ingresar un nombre, sin espacios y/o números");
			var contenedor = $('.name-container');
			var nodoAlerta = "<span>Favor ingresar un nombre, sin espacios y/o números</span>";
			contenedor.append(nodoAlerta);
			return false;
		}
		else if(/^^[a-zA-Z]*$/.test(nombre.value) == false){
			//alert ("Favor ingresar solo letras, sin espacios en blanco");
			var contenedor = $('.name-container');
			var nodoAlerta = "<span>Favor ingresar solo letras, sin espacios en blanco</span>";
			contenedor.append(nodoAlerta);
			return true;
		}    
		else if(nombre.value.charAt(0).toUpperCase()!== nombre.value.charAt(0)){
			//alert ("Favor ingresar su Nombre con la primera letra en Mayúscula");
			var contenedor = $('.name-container');
			var nodoAlerta = "<span>Favor ingresar su Nombre con la primera letra en Mayúscula</span>";
			contenedor.append(nodoAlerta);
			return false;
		}
	}
	nomBre();
	function apeLlido(){
		if( apellido.value == null || apellido.value.length == 0 || /^\s+$/.test(apellido.value) ) {
			//alert("Favor ingresar un apellido, sin espacios y/o números");
			var contenedor = $('.lastname-container');
			var nodoAlerta = "<span>Favor ingresar un Apellido, sin espacios y/o números</span>";
			contenedor.append(nodoAlerta);
			return false;
		}
		else if(/^^[a-zA-Z]*$/.test(apellido.value) == false){
			//alert ("Favor ingresar solo letras, sin espacios en blanco");
			var contenedor = $('.lastname-container');
			var nodoAlerta = "<span>Favor ingresar solo letras, sin espacios en blanco</span>";
			contenedor.append(nodoAlerta);
			return true;
		}
		else if(apellido.value.charAt(0).toUpperCase()!== apellido.value.charAt(0)){
			//alert ("Favor ingresar su Apellido con la primera letra en Mayúscula");
			var contenedor = $('.lastname-container');
			var nodoAlerta = "<span>La primera letra en Mayúscula</span>";
			contenedor.append(nodoAlerta);
			return false;
		}
	}
	apeLlido();
	/*Paso2: Validar que el campo email tenga un formato válido. Ej: name@domain.com*/
	function correo(){
		if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))){
			//alert("Campo de email en blanco, siga el formato válido. Ej: name@domain.com");
			var contenedor = $('.email-container');
			var nodoAlerta = "<span>formato válido name@domain.com</span>";
			contenedor.append(nodoAlerta);
			return false;
		}
	}
	correo();
	/*Paso3: El campo password debe tener al menos 6 caracteres
	El campo password no puede ser igual a "password" ó "123456" ó "098754"*/
	function clave(){
		if (pass === null || pass.length === 0 || pass.length<6 || pass == 'password' || pass == 123456 || pass == 098754){
			var contenedor = $('.form-group').eq(0);
			var nodoAlerta = "<span>Contraseña Invalida</span>";
			contenedor.append(nodoAlerta);
			return false;
		}
	}
	clave();
	/*Paso4:El valor seleccionado de bicis, debe ser una de las opciones presentadas*/
	function seleccion(){
		if( indice == 0 ) {
			//alert("No haz seleccionado una opción, favor escoge")
			var contenedor =  $('.form-group:eq(1)');
			var nodoAlerta = "<span>No haz seleccionado una opción, favor escoge</span>";
			contenedor.append(nodoAlerta);
			return false;
		}
	}
	seleccion();/*
	function twitter(){
		if (tw== null || tw==0){
			var contenedor = ('.input-group');
			var nodoAlerta = "<span>Debes completar este campo</span>";
			contenedor.append(nodoAlerta);
			return false;
		}
	}
	twitter(); */
}