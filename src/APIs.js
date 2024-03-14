import axios from "axios"

// const baseURL = process.env.REACT_APP_API_KEY
const baseURL = "http://www.quarkexpeditions.com/api/public/1/";
const proxyUrl = process.env.REACT_APP_PROXY;



// ********************* Expendition API *******************
export const expedition = async () => {
    try {
        await axios.get(baseURL + "expedition").then((data) => {
            return data
        }).catch((err) => {
            return err
        })
    }
    catch (error) {
        return error
    }
}

// ********************* Expendition Detail API *******************
export const expeditionDetail = async (id) => {
    try {
        await axios.get(baseURL + "/expedition/" + id).then((data) => {
            return data
        }).catch((err) => {
            return err
        })
    }
    catch (error) {
        return error
    }
}


// ********************* Itinerary Index API *******************

export const ItineraryIndex = async () => {
    try {
        const response = await axios.get(proxyUrl + baseURL + "itinerary");
        return response.data;
    }
    catch (error) {
        return error
    }
}

// ********************* Itinerary Detail API **********************

export const ItineraryDetail = async (id) => {
    try {
        await axios.get(baseURL + "/itinerary/" + id).then((data) => {
            return data
        }).catch((err) => {
            return err
        })
    }
    catch (error) {
        return error
    }
}

// *************************** Ship Index *********************

export const ShipIndex = async () => {
    try {
        await axios.get(baseURL + "ship").then((data) => {
            return data
        }).catch((err) => {
            return err
        })
    }
    catch (error) {
        return error
    }
}

// *************************** Ship Detail ********************

export const ShipDetail = async (id) => {
    try {
        const data = await axios.get(proxyUrl + baseURL + "ship/" + id)
        return data

    }
    catch (error) {
        return error
    }
}
export const itenenaryDetail = async (id) => {
    try {
        const data = await axios.get(proxyUrl + baseURL + "itinerary")
        console.log(data,"==================================");
        return data

    }
    catch (error) {
        return error
    }
}
export const itenenaryDetailById = async (id) => {
    try {
        const data = await axios.get(proxyUrl + baseURL + "itinerary"+"/"+id)
        return data

    }
    catch (error) {
        return error
    }
}

// ********************** Cabin Category Index *****************

export const CabinCategoryIndex = async () => {
    try {
        const data = await axios.get(proxyUrl + baseURL + "cabin-category")
        return data
    }
    catch (error) {
        return error
    }
}

// *********************** Cabin Category Detail *******************

export const CabinCategoryDetail = async (id) => {
    try {
        await axios.get(baseURL + "/cabin-category/" + id).then((data) => {
            return data
        }).catch((err) => {
            return err
        })
    }
    catch (error) {
        return error
    }
}

// ******************* Departure Index *****************

export const DepartureIndex = async () => {
    try {
        await axios.get(baseURL + "departure").then((data) => {
            return data
        }).catch((err) => {
            return err
        })
    }
    catch (error) {
        return error
    }
}

//****************** Departure Detail ***********************

export const DepartureDetail = async (id) => {
    try {
        await axios.get(baseURL + "/departure/" + id).then((data) => {
            return data
        }).catch((err) => {
            return err
        })
    }
    catch (error) {
        return error
    }
}

<button onClick={ItineraryIndex}>Fetch Itinerary</button>
