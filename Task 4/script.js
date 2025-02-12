const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const securedPage = document.getElementById('secured-page');
        const loginError = document.getElementById('login-error');
        const registerError = document.getElementById('register-error');
        const welcomeUsername = document.getElementById('welcome-username');

        function showRegisterForm() {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
            loginError.textContent = ""; 
        }

        function showLoginForm() {
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
            registerError.textContent = ""; 

        }

        function register() {
            const username = document.getElementById('register-username').value;
            const password = document.getElementById('register-password').value;

            if (username.trim() === "" || password.trim() === "") {
                registerError.textContent = "Username and password are required.";
                return;
            }

            
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            registerError.textContent = "";
            showLoginForm();
            alert("Registration successful. Please Login");
        }

        function login() {
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');

            if (username === storedUsername && password === storedPassword) {
                loginError.textContent = "";
                loginForm.style.display = 'none';
                securedPage.style.display = 'block';
                welcomeUsername.textContent = username;
            } else {
                loginError.textContent = "Invalid username or password.";
            }
        }

        function logout() {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            securedPage.style.display = 'none';
            loginForm.style.display = 'block';
        }