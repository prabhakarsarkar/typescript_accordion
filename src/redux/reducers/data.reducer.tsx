import { createSlice } from "@reduxjs/toolkit";
import fs from "fs";
const dataPath = "../../../data.json";
// const saveAccountData = (data) => {
//     const stringifyData = JSON.stringify(data)
//     fs.writeFileSync(dataPath, stringifyData)
// }
// const getAllData = () => {
//     console.log(dataPath);
//     const jsonData = fs.readFileSync(dataPath)
//     return JSON.parse(jsonData.toString())
// }
// console.log(getAllData(),'safasdf')

const initData = [
  {
    projectName: "Smart Wind power",
    pricePerUnit: "0.4",
    MarketPrice: "0.5",
    allocationPercentage: "30",
    Vintages: [
      {
        year: "2000",
        ReservationId: "1234567",
        balanceAvailable: "20",
        pricePerUnit: "10",
      },
      {
        year: "2001",
        ReservationId: "1234568",
        balanceAvailable: "50",
        pricePerUnit: "20",
      },
    ],
  },
];

const initialPayload = {
  projectName: "",
  pricePerUnit: "",
  MarketPrice: "",
  allocationPercentage: "",
  Vintages: [
    {
      year: "2022",
      ReservationId: "32423#",
      balanceAvailable: "200",
      pricePerUnit: "12",
    },
  ],
};

export const addData = createSlice({
  name: "addData",
  initialState: initData,
  reducers: {
    adding: (state: any, action: any) => {
        // state=
      return [...state,action.payload];
    },
  },
});

export const partialPayload = createSlice({
  name: "addPartialData",
  initialState: initialPayload,
  reducers: {
    payloadAdding: (state: any, action: any) => {
      // {...state.value,...action.payload}
      console.log(action.payload, "00000000hhhhhhhhhhhh");
      state = { ...state, ...action.payload };
      return state;
    },
    clearPayload: (state: any) => {
      // {...state.value,...action.payload}
    //   console.log(action.payload, "00000000hhhhhhhhhhhh");
      state = initialPayload
      return state;
    },
  },
});

export const { adding } = addData.actions;
export const { payloadAdding ,clearPayload} = partialPayload.actions;

export const addDataReducer = addData.reducer;
export const partialData = partialPayload.reducer;
