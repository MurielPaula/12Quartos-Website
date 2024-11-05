function verificarForm(){
    event.preventDefault(); // Previna o comportamento padrão do formulário
    
    var destino = document.getElementById('destino').value;
    var calendarioIDA = document.getElementById('checkin').value;
    var calendarioVOLTA = document.getElementById('calendarioVolta').value;
    var hospedagem = document.getElementById('hospedagem').value;
    var todayDate = getTodayDate();

    if (destino === "disabled selected" || calendarioIDA === "" || calendarioVOLTA === "" || hospedagem === "disabled selected") {
        alert("Por favor, preencha todos os campos antes de avançar.");
    } else if (calendarioIDA <= todayDate) {
        alert("A data de check-in não pode ser hoje ou anterior a hoje. Por favor, selecione uma data futura.");
    } else if (calendarioVOLTA <= calendarioIDA) {
        alert("A data de volta não pode ser anterior ou igual à data de ida. Por favor, selecione uma data futura.");
    } else {
        window.location.href = "quartos.html";
    }
}

// Função para obter a data de amanhã no formato 'YYYY-MM-DD'
function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}


//function escolherQuarto(numeroQuarto) {
    //var quartoSelecionado = document.querySelector('.selecaoquartos .quarto:nth-child(' + numeroQuarto + ')');
    
    //if (quartoSelecionado.classList.contains('ocupado')) {
        //alert('Quarto ' + numeroQuarto + ' está ocupado!');
    //} else {
        //window.location.href = 'quartoselecionado' + numeroQuarto + '.html';
    //}
//}

function escolherQuarto(element) {
    var status = element.getAttribute('data-status');
    
    if (status === 'Ocupado') {
        alert('Este quarto está ocupado!');
    } else if (status === 'Vago') {
        var numeroQuarto = Array.from(document.querySelectorAll('.quarto')).indexOf(element) + 1;
        window.location.href = 'quartoselecionado.html';
    }
}