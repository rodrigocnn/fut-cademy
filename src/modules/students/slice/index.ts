import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CategoryState {
  isOpenModalDelete: boolean;
  idSelected: number | null;
}

const initialState: CategoryState = {
  isOpenModalDelete: false,
  idSelected: null,
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    openModalDelete: state => {
      state.isOpenModalDelete = !state.isOpenModalDelete;
    },

    setIdSelected: (state, action: PayloadAction<number>) => {
      state.idSelected = action.payload;
    },
  },
});

const categoryReducer = studentSlice.reducer;
export default categoryReducer;
export const { openModalDelete, setIdSelected } = studentSlice.actions;
