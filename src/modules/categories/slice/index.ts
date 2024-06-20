import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Category } from '../models';

interface CategoryState {
  isOpenModalDelete: boolean;
  idSelected: number | null;
  categorySelected: Category | null;
}

const initialState: CategoryState = {
  isOpenModalDelete: false,
  idSelected: null,
  categorySelected: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    openModalDelete: state => {
      state.isOpenModalDelete = !state.isOpenModalDelete;
    },

    setIdSelected: (state, action: PayloadAction<number>) => {
      state.idSelected = action.payload;
    },

    setCategorySelected: (state, action: PayloadAction<Category>) => {
      state.categorySelected = action.payload;
    },
  },
});

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
export const { openModalDelete, setIdSelected, setCategorySelected } = categorySlice.actions;
