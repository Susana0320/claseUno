const obtenerValorInput = () => {
    let inputTexto =document.getElementById("input_pais");
    let valor = inputTexto.value
    peticionApi(valor)
}
const peticionApi = (pais) => {
    const baseUrl = 'https://restcountries.com/v3.1/';
    const endpoint = `name/${pais}`;
    const url = `${baseUrl}${endpoint}`;
    
    axios
    .get(url)
    .then(respuesta => mostrarInformacion(respuesta.data))
    .catch(error => console.log(error))
}

const mostrarInformacion = (data) => {
    let respuestaApi = document.getElementById('show-info');
    respuestaApi.innerHTML = `
    <h2>Capital:</h2> <label>${data[0]['capital']}</label>
    <h2>Población:</h2> <label>${data[0]['population']}</label>
    <h2>Area:</h2> <label>${data[0]['area']}</label>
    `    
}