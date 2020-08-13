import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 5tVsRQ28pUcN52VFyaYfTYEfLUFDB-FzDhEhZArKduqMXJSOAEw1RGTdmyPI5OmgiKmBy_fFziFqAHwTzQ2ySr6lsl_RpvQUcSUKu11Nq_gP3FZV-XOxIGF0qv00X3Yx",
  },
});
