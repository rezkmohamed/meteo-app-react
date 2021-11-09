export const fetchDayForecastInstance = () => {
    const urlBase = "https://www.torinometeo.org/api/v1/realtime/data/";
    const fetchDayForecastInstanceReq = async () => {
        const response = await fetch(`${urlBase}`);
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();

        return data;
    }

    return fetchDayForecastInstanceReq();
};

