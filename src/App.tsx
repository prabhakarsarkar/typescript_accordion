import * as React from "react";
import "./App.css";

import SimpleAccordions from "./components/SimpleAccordion";
import AddAccordion from "./components/AddAccordion";
import { useDispatch, useSelector } from "react-redux";
import { adding, clearPayload } from "./redux/reducers/data.reducer";

// const data = [
//   {
//     projectName: "Smart Wind power",
//     pricePerUnit: "0.4",
//     MarketPrice: "0.5",
//     allocationPercentage: "30",
//     Vintages: [
//       {
//         year: "2000",
//         ReservationId: "1234567",
//         balanceAvailable: "20",
//         pricePerUnit: "10",
//       },
//       {
//         year: "2001",
//         ReservationId: "1234568",
//         balanceAvailable: "50",
//         pricePerUnit: "20",
//       },
//     ],
//   },
//   {
//     projectName: "Telengana Wind power",
//     pricePerUnit: "0.5",
//     MarketPrice: "0.5",
//     allocationPercentage: "50",
//     Vintages: [
//       {
//         year: "2021",
//         ReservationId: "1234567",
//         balanceAvailable: "120",
//         pricePerUnit: "100",
//       },
//       {
//         year: "2022",
//         ReservationId: "1234568",
//         balanceAvailable: "200",
//         pricePerUnit: "10",
//       },
//     ],
//   },
// ];

function App() {
  const dispatch = useDispatch();
  const [add, setAdd] = React.useState<boolean | false>(false);
  const data = useSelector((state: any) => state?.addDataReducer);
  const payload = useSelector((state: any) => state?.partialData);
  const submitAdd = () => {
    dispatch(adding(payload));
    dispatch(clearPayload());
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center  ">
        <div className="mt-5 col-10   ">
          <SimpleAccordions data={data} />
        </div>

        {add && (
          <>
            <div className="mt-5 col-10 ">
              <AddAccordion />
            </div>
          </>
        )}
      </div>
      {!add ? (
        <div className="text-primary col-3 btn" onClick={() => setAdd(!add)}>
          +Add Project
        </div>
      ) : (
        <div className="col-12 d-flex justify-content-center pt-3">
          <div
            className="text-primary col-1 btn btn-danger "
            onClick={() => {
              submitAdd();
              setAdd(!add);
            }}
          >
            save
          </div>
        </div>
      )}
      <br />
      <br />
    </>
  );
}

export default App;
