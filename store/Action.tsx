import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
// to get user name 
export const profileData = (newData) => ({
    type: 'UPDATE_Profile_DATA',
    payload: newData,
  });


  // api search action
export const ApiSearchData = (query) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}`, {
        headers: {
          Authorization: '0rgSW8Y6zehAXv9RMZh1pyzCUYbKNCokHyDkcFDrvVwNZVGaVrsQIXuS',
        },
      });
      
      dispatch({ type: 'FETCH_PHOTOS_SUCCESS', payload: response.data.photos });
    } catch (error) {
      dispatch({ type: 'FETCH_PHOTOS_FAILURE', payload: error.message });
    }
  };
  };


