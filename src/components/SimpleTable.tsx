import { log } from "console";
import React from "react";

interface Props {
  data?: any,
  children?: JSX.Element
}

const SimpleTable = (props: Props) => {
  const data = props?.data || [];
  return (
    <div className=" rounded p-4" style={{ backgroundColor: "#e6e6e67d" }}>
      <div>
        <div className="fw-bolder mb-3">Allocate credits to the vintages</div>
      </div>
      <div
        className="rounded p-2 "
        style={{ fontSize: "13px", backgroundColor: "#1e488266" }}
      >
        Below are the list of reservations against the project .Allocate
        quantity as per the availability below.
      </div>
      <div className=" card  py-3 px-4 mt-4">
        <table>
          <thead className="">
            <tr className=" rounded" style={{ backgroundColor: "#9fbdcd33" }}>
              <th className="t-head-data">Year</th>
              <th className="t-head-data">Reservation ID#</th>
              <th className="t-head-data">Purchase Price/Unit</th>
              <th className="t-head-data">
                Balance availability for allotment
              </th>
              <th className="t-head-data">Quantity allotment Now</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.length > 0 &&
              data.map((item: any, index: number) => (
                <>
                  <br />
                  <tr className="border rounded  ">
                    <td className="t-head-data">{item?.year || "N/A"}</td>
                    <td className="t-head-data">
                      {item?.ReservationId || "N/A"}
                    </td>
                    <td className="t-head-data">
                      {item?.pricePerUnit || "N/A"}
                    </td>
                    <td className="t-head-data">
                      {item?.balanceAvailable || "N/A"}
                    </td>
                    <td className="t-head-data">
                      <div className="d-flex justify-content-between align-items-center my-1">
                        <input
                          type="text"
                          className="col-8 p-2"
                          placeholder="Enter here"
                          disabled
                        />
                        <img
                          src="/delete-icon.png"
                          className="mx-2"
                          alt=""
                          width={15}
                          height={15}
                        />
                      </div>
                    </td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
        <br />
        <div
          className=" rounded p-2 px-4 col-12 d-flex justify-content-end"
          style={{ backgroundColor: "#9fbdcd33" }}
        >
          <div className="">Credits allocates : 200</div>
          <span className="mx-3">|</span>
          <div>Total Price : $300</div>
        </div>
      </div>
    </div>
  );
};

export default SimpleTable;
