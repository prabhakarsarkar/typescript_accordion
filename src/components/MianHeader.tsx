import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { payloadAdding } from "../redux/reducers/data.reducer";

const projectList = [
  {
    label: "Smart Wind power",
    value: "Smart Wind power",
  },
  {
    label: "Telangana Wind power",
    value: "Telangana Wind power",
  },
  {
    label: "roadways construct energy",
    value: "roadways construct energy",
  },
  {
    label: "Border infrastructure",
    value: "Border infrastructure",
  },
];

interface Props {
  type?: string,
  data?:any
}

function MianHeader(props: Props) {
  const dispatch = useDispatch();
  const type = props?.type || "";
  const data = props?.data || [];

  const [addRecodeDate, setAddRecodeDate] = React.useState({
    MarketPrice: "",
    allocationPercentage: "",
    pricePerUnit: "",
    projectName: "",
  });

  useEffect(() => {
    dispatch(payloadAdding(addRecodeDate));
  }, [addRecodeDate]);

  const chgData = (key: string, value: any) => {
    setAddRecodeDate({ ...addRecodeDate, [key]: value });
  };

  console.log(addRecodeDate, "nnnnnnnnnnn");

  return (
    <div className="d-flex col-12 flex-wrap fw-bolder">
      <div className="col-5 ">
        <label htmlFor="#" className="d-block">
          {" "}
          Name of project
        </label>
        {type == "add" ? (
          // <input
          //   type="text"
          //   className="col-8 py-2 my-2 px-2"
          //   placeholder="Project Name"
          //   name="projectName"
          //   onChange={(e) => chgData(e.target.name, e.target.value)}
          // />
          <select
            id=""
            // disabled={type == "add" ? false : true}
            className="col-8 py-2 my-2 px-2"
            name="projectName"
            onChange={(e) => chgData(e.target.name, e.target.value)}
          >
            {projectList?.map((item, index) => (
              <option value={item?.value || "N/A"}>
                {item?.label || "N/A"}
              </option>
            ))}
          </select>
        ) : (
          <select
            name="s"
            id=""
            disabled={type == "add" ? false : true}
            className="col-8 py-2 my-2 px-2"
          >
            <option value="">{data?.projectName || "N/A"}</option>
          </select>
        )}
      </div>
      <div className="col-3 ">
        <label htmlFor="#" className="d-block">
          {" "}
          Price/Unit
        </label>
        {type == "add" ? (
          <input
            type="number"
            className="col-8 py-2 my-2 px-2"
            placeholder=" Price/Unit"
            name="pricePerUnit"
            onChange={(e) => chgData(e.target.name, e.target.value)}
          />
        ) : (
          <input
            type="text"
            disabled={type == "add" ? false : true}
            className="col-8  py-2 my-2 px-2"
            value={data?.pricePerUnit || "N/A"}
          />
        )}
      </div>
      <div className="col-3 ">
        <label htmlFor="#" className="d-block">
          Market Price
        </label>
        {type == "add" ? (
          <input
            type="number"
            className="col-8 py-2 my-2 px-2"
            placeholder=" Market Price"
            name="MarketPrice"
            onChange={(e) => chgData(e.target.name, e.target.value)}
          />
        ) : (
          <>
            <div className="fw-bolder">${data?.MarketPrice}</div>
            <div className="fst-italic text-muted">
              Last updated on May 6,2022
            </div>
          </>
        )}
      </div>
      <div className="col-3 mt-2 ">
        <label htmlFor="#" className="d-block">
          {" "}
          Allocation Percentage
        </label>
        {type == "add" ? (
          <input
            type="number"
            className="col-8 py-2 my-2 px-2"
            placeholder="Allocation Percentage"
            name="allocationPercentage"
            onChange={(e) => chgData(e.target.name, e.target.value)}
          />
        ) : (
          <input
            type="text"
            disabled={type == "add" ? false : true}
            className="col-12  py-2 my-2 px-2"
            value={(data?.allocationPercentage || "0") + "%"}
          />
        )}
      </div>
      <div className="d-flex align-items-end pb-2 mx-4">
        <span className="fw-bolder">Credit quantity : 300</span>
      </div>
    </div>
  );
}

export default MianHeader;
