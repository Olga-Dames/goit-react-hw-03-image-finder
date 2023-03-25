import axios from "axios";

const API_KEY = '33310644-33c3a55021d389068af948751';
axios.defaults.baseURL = `https://pixabay.com`
const params = {
q: 'cat',
page: 1,
image_type: 'photo',
orientation: 'horizontal',
per_page: 12,
}

export const getImages = async() => {
    try {
      const response = await axios.get(`/api/?q=cat&page=1&key=${API_KEY}`, {params});
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }


