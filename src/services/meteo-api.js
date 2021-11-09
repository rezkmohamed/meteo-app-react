export const fetchDayForecastInstance = (date) => {
    const urlBase = "https://www.torinometeo.org/api/v1/forecast/day";
    const fetchDayForecastInstanceReq = async () => {
        const response = await fetch(`${urlBase}/${date}`);
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();

        return data;
    }

    return fetchDayForecastInstanceReq();
};

