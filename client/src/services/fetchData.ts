export const fetchData = async (apiPath: string) => {
    const response = await fetch(apiPath);
    const data = await response.json();
    return data;
};
