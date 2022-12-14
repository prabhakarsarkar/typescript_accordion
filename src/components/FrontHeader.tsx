import React from "react";

interface Props {
  data: any;
}

const FrontHeader = (props:Props) => {
  const item = props.data;
  return (
    <div className="px-3 py-2 col-12 ">
      <div className="col-11 d-flex  justify-content-between ">
        <div>
          <span className="fs-5 fw-bolder">{item?.projectName}</span>
          <span className="mx-3 rounded-pill percentage-Icons px-3 py-1 " style={{ backgroundColor: "#e6d494" }}>
            {item?.allocationPercentage?item?.allocationPercentage+"%": "N/A"}
          </span>
        </div>
        <div className="">
          <img src="/delete-icon.png" alt="" width={25} height={25} />
        </div>
      </div>
      <div className="col-11 d-flex py-3 justify-content-between ">
        <div>
          <span>Credits :</span>
          <span className="mx-1 fw-bolder">400</span>
        </div>
        <div>
          <span className="text-muted">Price/Unit : {item?.pricePerUnit}</span>
          <span className="ms-5 text-center  fw-bolder">$50</span>
        </div>
      </div>
    </div>
  );
};

export default FrontHeader;
