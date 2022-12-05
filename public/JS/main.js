const submitbtn = document.getElementById('submitbtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');

const temp_real_value = document.getElementById('temp_real_value');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer')

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = 'please write the name before search';
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f473854f9c9228353837ad7d485eb1f1`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_value.innerText = arrData[0].main.temp;
            const tempStatus = arrData[0].weather[0].main;


            if (tempStatus == "Sunny") {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempStatus == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempStatus == "Rainy") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else if (tempStatus == "Haze") {
                temp_status.innerHTML =
                    "<i class='fa-solid fa-sun-haze' style='color:#f1f2f6;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color:#eccc68;'></i>";
            }
            datahide.classList.remove('data_hide');
        } catch {
            city_name.innerText = "please enter the valid city name";
            datahide.classList.add('data_hide');
        }
    }
}
submitbtn.addEventListener('click', getInfo);