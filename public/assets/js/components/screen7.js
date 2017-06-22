const screen7 = (update) => {
	const divClave = $("<div id='divCodigo' class='container'></div>");
	const rowIcons = $("<div class='row'><div class='col-xs-6 pull-left'><span>&#60; Volver</span></div><div class='col-xs-6 pull-right'><img src='assets/img/icons/question.png'></div></div>");
	const rowIngresa = $("<div class='row'></div>");
	const rowClave = $("<div class='row'></div>");
	const rowRegistra = $("<div class='row'></div>");
	const ingresa = $("<div class= 'col-xs-12 text-center inicio' style='width:100%'><img src='assets/img/icons/bcp-logo.png'><h3>Ingresa la clave de tu tarjeta</h3><h5>Tarjeta</h5></div>");
	const inputClave = $("<div class='col-xs-10 text-center input-group inputCel'><span class='input-group-addon' id='basic-addon1'><img src='assets/img/icons/lock.png'></span><input id='claveTarjeta' type='password' class='form-control' maxlength='4' aria-describedby='basic-addon1'></div>");
	const btnRegistrar = $("<div class='col-xs-12 text-center btn-continuar'><button id='btn-reg' type='button' class='btn btn-lg' disabled='disabled'>REGISTRAR</button></div>");

	divTarjeta.append(rowAsk);
	divTarjeta.append(rowTarjeta);	
	divTarjeta.append(rowNumTarjeta);
	divTarjeta.append(rowFechaVenc);
	divTarjeta.append(rowBtnCont);
	rowTarjeta.append(tarjeta);
	rowNumTarjeta.append(inputTarjeta);
	rowFechaVenc.append(inputFecha);
	rowBtnCont.append(btnContinuar);


	inputClave.on('keyup', (e) =>{

		if($('#claveTarjeta').val().length == 4 ){			
			$('#btn-reg').prop('disabled', false);
			$('#btn-reg').css('background-color', '#fbd43b');
			$('#btn-reg').css('color', 'white');			
			$('#btn-reg').on('click',() => {
				// validar($('#celular').val(), checkVal);
				state.screen = "screen8";
				console.log(state.screen);
				update();
			});		
				
		}else{
			$('#btn-reg').prop('disabled', true);
			}			
	})	

	

	return divClave;
}