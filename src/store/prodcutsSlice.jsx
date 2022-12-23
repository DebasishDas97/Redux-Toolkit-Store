const { createSlice } = require("@reduxjs/toolkit");

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading"
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    }
  }
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//Thunks
export function fetchProducts() {
  return async function fetchProductThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      fetch("https://fakestoreapi.com/products/")
        .then((resp) => resp.json())
        .then((data) => dispatch(setProducts(data)));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(`error is ${err}`);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
