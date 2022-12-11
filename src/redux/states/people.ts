import { Person } from "@/models";
import { LocalStorageTypes } from "@/models/localstorage";
import { getLocalStorages, setLocalStorages } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const peopleSlice = createSlice({
  name: 'people',
  initialState: getLocalStorages(LocalStorageTypes.PEOPLE)
    ? JSON.parse(getLocalStorages(LocalStorageTypes.PEOPLE) as string)
    : initialState,
  reducers: {
    addPeople: (state, action) => {
      setLocalStorages(LocalStorageTypes.PEOPLE, state);
      return action.payload;
    }
  }
});

export const { addPeople } = peopleSlice.actions;

export default peopleSlice.reducer;