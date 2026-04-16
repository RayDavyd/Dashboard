const USERS = [
  { email: 'admin@havycode.com', senha: 'admin123', nome: 'Admin' },
  { email: 'user@havycode.com', senha: 'user456',   nome: 'userHavycode'   },
]

function login(){
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const campoMensagem = document.getElementById('mensagem');
   
    if(email === '' || senha === ''){
        campoMensagem.textContent = 'Por favor, preencha todos os campos.';   
        campoMensagem.style.color = 'orange'; 
        return;
    }
     const user = USERS.find(u => u.email == email && u.senha == senha );

    if(user){
        campoMensagem.textContent = 'Login efetuado com sucesso! Entrando...';
        campoMensagem.style.color = 'green';    
        localStorage.setItem('sessao', JSON.stringify(user));
       setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 3000);
    }
    else{
        campoMensagem.textContent = 'Email ou senha incorretos.';
        campoMensagem.style.color = 'red'; 
    }

}

document.getElementById('entrar').addEventListener('click', login);



