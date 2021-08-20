console.log('arquivo validacao.js');

//evento disparado quando janela termina de carregar
window.addEventListener('load', (evento) =>{
    let formulario = document.querySelector('.form-auth');
    console.log(formulario);
    let btnSubmit = document.querySelector('.form-auth button');

    btnSubmit.addEventListener('click', (evento_submit) => {
        //  interrompe
        evento_submit.preventDefault();

        evento.preventDefault();
        let inputNome = document.querySelector('input[name="name"]');
        let listaErros = document.querySelector('.erros ul');
        // console.log(inputNome.value == "");
        let erros = [];
        listaErros.innerHTML = "";
        console.log(inputNome.value);

        if(inputNome.value == ""){
            erros.push('campo Nome está vazio!')
        }

        for(const erro of erros){
            listaErros.innerHTML += `<li> + ${erro} + </li>`;
        }
    });
});