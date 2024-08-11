let res = document.getElementById('res') 

function cat(){

    let veiculo = document.getElementById('modelos').value
    let pecas = document.getElementById('pecas').value
    let year = document.getElementById('year').value

    if (veiculo.length == 0 || pecas.length == 0 || year.length == 0) {
        alert('Verifique os dados e tente novamente!')
    }
    else if (veiculo == 'onix' && pecas == 'pastilha' && year == '2020 - 2024'){
        modelo = 'Onix'
        precoGM = 'R$999'
        precoAcdelco = 'R$199'
        pastilha()
    } else if (veiculo == 'tracker' && pecas == 'pastilha' && year == '2020 - 2024') {
        precoGM = 'R$1200'
        precoAcdelco = 'R200'
        modelo = 'Tracker'
        pastilha()
    } else if (veiculo == 'tracker' && pecas == 'discos' && year == '2020 - 2024') {
        precoGM = 'R$2000'
        precoAcdelco = 'R$600'
        modelo = 'Tracker'
        discos()
    } else if(veiculo == 'onix' && pecas == 'discos' && year == '2020 - 2024'){
        precoGM = 'R$1999'
        precoAcdelco = 'R$799'
        modelo = 'onix'
        discos()
    } else if(veiculo == 'onix' && pecas == 'chaves' && year == '2020 - 2024'){
        modelo = 'Onix'
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
					<td> R$ ${precoGM} </td>
					<td> R$ ${precoAcdelco} </td>
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
					<td> R$ ${precoGM} </td>
					<td> R$ ${precoAcdelco} </td>
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
