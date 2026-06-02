const API_URL = "https://admin.aqarhub360.com/api";


export async function getProperties(filters = {}) {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
            params.append(key, String(value));
        }
    });

    const url = `https://admin.aqarhub360.com/api/properties?${params.toString()}`;

    const res = await fetch(url, {
        cache: "no-store",
    });

    return res.json();
}
// all developers
export async function getDevelopers() {
    const res = await fetch(`${API_URL}/developers`, {
        cache: "no-store",
    });

    return res.json();
}

/**
 * Get single developer properties (IMPORTANT: normalize data)
 */
export async function getDeveloperProperties(id) {

    const res = await fetch(
        `${API_URL}/developers/${id}/properties`,
        {
            cache: "no-store",
        }
    );

    const json = await res.json();

    // 🔥 رجّع array properties مباشرة
    return json.data.data;
}
export async function getProperty(slug) {
    const res = await fetch(`${API_URL}/properties/${slug}`, {
        cache: "no-store",
    });

    const text = await res.text();

    try {
        const json = JSON.parse(text);
        return json.data;
    } catch (e) {
        console.log("API returned non-JSON:", text);
        return null;
    }
}

// COUNTRIES
export async function getCountries() {

    const res = await fetch(`${API_URL}/countries`, {
        cache: "no-store",
    });

    const json = await res.json();

    return json.data || [];
}

// CITIES BY COUNTRY
export async function getCountryCities(id) {

    const res = await fetch(
        `${API_URL}/countries/${id}/cities`,
        {
            cache: "no-store",
        }
    );

    const json = await res.json();

    console.log(json);

    // 🔥 VERY IMPORTANT
    return json.data || [];
}


export async function getCities() {
    const res = await fetch(`${API_URL}/cities`, {
        cache: "no-store",
    });

    const data = await res.json();

    return data;
}
// PROPERTIES BY CITY
export async function getCityProperties(id) {

    const res = await fetch(`${API_URL}/cities/${id}/properties`, {
        cache: "no-store",
    });

    const json = await res.json();

    return json?.data?.data || [];
}