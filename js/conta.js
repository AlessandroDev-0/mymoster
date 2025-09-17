// Função para salvar usuário no localStorage
function salvarUsuario(usuario) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Função para buscar usuário
function buscarUsuario(email, senha) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    return usuarios.find(u => u.email === email && u.senha === senha);
}

// Cadastro
if (window.location.pathname.includes('cadastro.html')) {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('password').value;
        const confirmSenha = document.getElementById('confirm-password').value;

        if (senha !== confirmSenha) {
            alert('As senhas não coincidem!');
            return;
        }

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        if (usuarios.some(u => u.email === email)) {
            alert('Este email já está cadastrado!');
            return;
        }

        salvarUsuario({ name, email, senha });
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'login.html';
    });
}

// Login
if (window.location.pathname.includes('login.html')) {
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('password').value;

        const usuario = buscarUsuario(email, senha);
        const erro = document.getElementById('login-error');
        if (usuario) {
            localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
            erro.textContent = '';
            alert('Login realizado com sucesso!');
            window.location.href = 'index.html';
        } else {
            erro.textContent = 'Email ou senha inválidos!';
        }
    });
}