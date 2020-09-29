var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);


var tbody = document.querySelector('table tbody');

//adicionando evento para colocar tr e td dentro do tbody gerando a tabela
document.querySelector('.form').addEventListener('submit',function(event){
    
    event.preventDefault();
    var tr = document.createElement('tr'); //criar tr

    campos.forEach(function(campo){

        var td = document.createElement('td'); //criar td
        td.textContent = campo.value;
        tr.appendChild(td); //adicionando td como filho do tr
    });

    var tdVolume = document.createElement('td'); //criar td do volume e fazer a conta dele 'quantidade * valor'
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume); //adicionando tdVolume como filho do tr
    tbody.appendChild(tr);

    campos[0].value = ''; //resetando os campos ao clicar no botão
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus(); //dar foco para a data

})