document.getElementById('login-form').addEventListener('submit', function(event) {
	event.preventDefault();

	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	if (username === 'admin' && password === 'password') {
		alert('Login successful!');
	} else {
		document.getElementById('message').innerText = 'Invalid username or password.';
	}
});