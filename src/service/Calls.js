// HTTP request service

import axios from "axios";


class Calls {
  constructor() {
    this.calls = axios.create({
      baseURL: "http://localhost:5000",
      // baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  // apartments
  async search(query) {
    const { location, priceMax, priceMin, sizeMax, sizeMin, roomsNumber } = query;
    const { data } = await this.calls
      .get(`/api/search?location=${location}&priceMin=${priceMin}&priceMax=${priceMax}&sizeMin=${sizeMin}&sizeMax=${sizeMax}&roomsNumber=${roomsNumber}`)
    return data;
  }

  async getApartments() {
    return this.calls.get('/api/apartments')
      .then((data) => data)
      .catch((err) => console.log(err))
  }
}

const calls = new Calls();
export default calls;
