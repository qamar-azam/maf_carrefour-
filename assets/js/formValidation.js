$('#signInForm').submit( function( event ){
	$username = $('#username');
	$password = $('#password');

	if( !$username.val() ){
		$username.siblings('.form-error').css( "display", "block" ).text('Required field');
		$username.addClass( "error-input" );
	}

	if( !$password.val() ){
		$password.siblings('.form-error').css( "display", "block" ).text('Required field');
		$password.addClass( "error-input" );
	}

	if( $username.val() && $password.val() ){
		$.ajax({
			method: "POST",
			url: "./assets/script/db.php",
			data: { username: $username.val() , password: $password.val() }
		})
		.done(function( msg ) {			
			$('#formMessage').text( msg );
		});
	}

	event.preventDefault();
});

$('#signInForm input').focus( function(){		
	$(this).siblings('.form-error').css( "display", "none" ).text('');
	$(this).removeClass( "error-input" );
});