// reducer.js

const initialState = [];

export const ApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PHOTOS_SUCCESS':
      return action.payload; // Assuming action.payload is the new array of photos
    // Assuming action.payload is the new array of photos
    case 'FETCH_PHOTOS_FAILURE':
      // Handle failure state if needed
      return state;
    default:
      return state;
  }
};
