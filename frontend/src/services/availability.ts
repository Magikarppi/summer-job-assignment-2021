export const fetchAvailability = async (manufacturer: any) => {
  try {
    // const response = await fetch(BASE_URL);
    const response = await fetch(`/api/availability/${manufacturer}`);
    console.log('response in fetchabailbility', response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
