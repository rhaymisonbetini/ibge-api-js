
$('#estado').on('change', () => {

    let state = $('#estado').val();
    if (state) {
        const promisse = buscarMunicipios(state);
        promisse.then(municipios => {
            listarMunicipios(municipios);
        })
    } else {
        $('#municipios').html('');
    }
});


$('#estadoBusca').on('change', () => {
    let stateBusca = $('#estadoBusca').val();
    if (stateBusca) {
        const promisse = buscarMunicipios(stateBusca);
        promisse.then(municipios => {
            listarMunicipiosBusca(municipios);
        })
    } else {
        $('#municipioBusca').html('');
    }
});

function listarMunicipios(municipios) {
    $('#municipios').html('');
    municipios.forEach(element => {
        $('#municipios').append(`
          <option value="${element.nome}">${element.nome}</option>
     `);
    });
}


function listarMunicipiosBusca(municipios) {
    $('#municipioBusca').html('');
    $('#municipioBusca').append(`
          <option value=""></option>
     `);
    municipios.forEach(element => {
        $('#municipioBusca').append(`
          <option value="${element.nome}">${element.nome}</option>
     `);
    });
}


//metodos de edição
function findMunicipicios(id) {
    let state = $('#estado' + id).val();
    const promisse = buscarMunicipios(state);
    promisse.then(municipios => {
        listaMunicipiosEdicao(municipios, id);
    })
}

function findStateName(state, id) {
    let stateNameIndex = estados.findIndex(estado => estado.value == state);
    let stateName = estados[stateNameIndex].name;
    $('#selectedValueForEdition' + id).text(stateName);
    const promisse = buscarMunicipios(state);
    promisse.then(municipios => {
        listaMunicipiosEdicao(municipios, id)
    })
}

function listaMunicipiosEdicao(municipios, id) {
    $("#municipios" + id).html('');
    municipios.forEach(element => {
        $('#municipios' + id).append(`
         <option value="${element.nome}">${element.nome}</option>
        `);
    })
}




async function buscarMunicipios(state) {
    var index = estados.findIndex(estado => estado.value == state);
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + estados[index].codigoIbge + '/municipios';
    const resp = await fetch(url);
    if (!resp.ok) {
        throw new Error('Erro ao tentar listar municípios');
        console.log(Error);
    } else {
        const respJson = await resp.json();
        return respJson;
    }
}



const estados = [
    { value: "AC", name: "Acre", codigoIbge: 12 },
    { value: "AL", name: "Alagoas", codigoIbge: 27 },
    { value: "AP", name: "Amapá", codigoIbge: 16 },
    { value: "AM", name: "Amazonas", codigoIbge: 13 },
    { value: "BA", name: "Bahia", codigoIbge: 29 },
    { value: "CE", name: "Ceará", codigoIbge: 23 },
    { value: "DF", name: "Distrito Federal", codigoIbge: 53 },
    { value: "ES", name: "Espirito Santo", codigoIbge: 32 },
    { value: "GO", name: "Goiás", codigoIbge: 52 },
    { value: "MA", name: "Maranhão", codigoIbge: 21 },
    { value: "MT", name: "Mato Grosso", codigoIbge: 51 },
    { value: "MS", name: "Mato Grosso do Sul", codigoIbge: 50 },
    { value: "MG", name: "Minas Gerais", codigoIbge: 31 },
    { value: "PA", name: "Pará", codigoIbge: 15 },
    { value: "PB", name: "Paraíba", codigoIbge: 25 },
    { value: "PR", name: "Paraná", codigoIbge: 41 },
    { value: "PE", name: "Pernambuco", codigoIbge: 26 },
    { value: "PI", name: "Piauí", codigoIbge: 22 },
    { value: "RJ", name: "Rio de Janeiro", codigoIbge: 33 },
    { value: "RN", name: "Rio Grande do Norte", codigoIbge: 24 },
    { value: "RS", name: "Rio Grande do Sul", codigoIbge: 43 },
    { value: "RO", name: "Rondônia", codigoIbge: 11 },
    { value: "RR", name: "Roraima", codigoIbge: 14 },
    { value: "SC", name: "Santa Catarina", codigoIbge: 42 },
    { value: "SP", name: "São Paulo", codigoIbge: 35 },
    { value: "SE", name: "Sergipe", codigoIbge: 28 },
    { value: "TO", name: "Tocatins", codigoIbge: 17 },
]
