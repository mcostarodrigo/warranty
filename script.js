let res = document.getElementById('res') 



function cat(){

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv';  // Aceitar apenas arquivos CSV

    // Define a função a ser chamada quando o arquivo for selecionado
    input.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            processoCSV(file)
        }
    });

    input.click();

}

function processoCSV(file){
    Papa.parse(file, {
        header: true,
        complete: function(results) {
            VerificarSelecao(results.data);
        },
        error: function(error) {
            console.error("Erro ao processar o arquivo CSV:", error);
        }
    });
}

function VerificarSelecao(lista){
    let veiculo = document.getElementById('modelos').value
    let pecas = document.getElementById('pecas').value

    if (veiculo == 'onix' && pecas == 'pastilha'){
        var peca = '45678908'
        for(k in lista){
            if(lista[k]['pecanumero'] == peca) {
                MostrarInformacoes(peca, lista[k]['preco'], lista[k]['preco'])
            }
        }

    }
}

function MostrarInformacoes(pecaGM_, precoGM_, precoAcdelco_){
    let veiculo = document.getElementById('modelos').value
    let pecas = document.getElementById('pecas').value

    if (veiculo.length == 0 || pecas.length == 0) {
        alert('Verifique os dados e tente novamente!')
    }
    
    else if (veiculo == 'onix' && pecas == 'pastilha'){
        pecaGM = pecaGM_
        modelo = veiculo
        precoGM = precoGM_
        precoAcdelco = precoAcdelco_
        modelo = veiculo
        pastilha()
    } else if (veiculo == 'tracker' && pecas == 'pastilha') {
        peca = '12345678'
        precoGM = '1200'
        precoAcdelco = '200'
        modelo = veiculo
        pastilha()
    } else if (veiculo == 'tracker' && pecas == 'discos') {
        peca = '12345678'
        precoGM = '2000'
        precoAcdelco = '600'
        modelo = veiculo
        discos()
    } else if(veiculo == 'onix' && pecas == 'discos'){
        peca = '12345678'
        precoGM = '1999'
        precoAcdelco = '799'
        modelo = veiculo
        discos()
    } else if(veiculo == 'onix' && pecas == 'chaves'){
        peca = '12345678'
        modelo = veiculo
        tresBotoes = '450'
        doisBotoes = '250'
        chaves()
    }
}


function pastilha() {
    res.innerHTML =
    `
    </br>

    <ul id="aviso"> 
     <li <span style="color: rgb(50,50,50)"> Valores para veículos ${modelo} a partir do ano 2020: Lembre-se de adicionar o valor da peça escolhida ao custo da mão de obra. </li>
    </ul>

    </br>

    <table>
			<caption style="text-align: center;"> <a href=""></a>
			</caption>

			<thead>
				<tr>
					<th scope="col"> PASTILHA GM </th>
					<th scope="col"> PASTILHA ACDELCO  </th>
                    <th scope="col"> Mão de Obra </th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td> ${precoGM} </td>
					<td> ${precoAcdelco} </td>
                    <td> R$ 120 </td>
				</tr>
                </table>
                    </br>
                    </br>
`
}

function discos (){
    res.innerHTML =
    `
    </br>

    <ul id="aviso"> 
     <li <span style="color: rgb(50,50,50)"> Valores para veículos ${modelo} a partir do ano 2020: Lembre-se de adicionar o valor da peça escolhida ao custo da mão de obra. </li>
    </ul>

    </br>

    <table>
			<caption style="text-align: center;"> <a href=""></a>
			</caption>

			<thead>
				<tr>
					<th scope="col"> DISCOS GM </th>
					<th scope="col"> DISCOS ACDELCO  </th>
                    <th scope="col"> Mão de Obra </th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td> ${precoGM} </td>
					<td> ${precoAcdelco} </td>
                    <td> R$ 180 </td>
				</tr>
                </table>
                    </br>
                    </br>
`

}

function chaves(){
    res.innerHTML =
    `
    </br>

    <ul id="aviso"> 
     <li <span style="color: rgb(50,50,50)"> Valores para veículos ${modelo} a partir do ano 2020: Considere que o valor da peça escolhida deve ser adicionado ao custo da mão de obra, e corte da lâmina. Além disso, no caso do cliente não possuir a chave reserva, será cobrado um valor adicional de R$50 para o corte da nova chave. </li>
    </ul>

    </br>
    </br>
    </br>
    </br>

    <table>
			<caption style="text-align: center;"> <a href=""></a>
			</caption>


			<thead>
				<tr>
					<th scope="col"> CHAVE COM 3 BOTÕES</th>
					<th scope="col"> CHAVE COM 2 BOTÕES  </th>
                    <th scope="col"> Mão de Obra </th>
                    <th scope="col"> Corte da lâmina </th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td> R$ ${tresBotoes} </td>
					<td> R$ ${doisBotoes} </td>
                    <td> R$ R$385 </td>
                    <td> R$ R$100 </td>
				</tr>
                </table>
                    </br>
                    </br>
`

}

