import React from "react";
import "./TravelItem.css";

const TrevelItem = () => {
  return (
    <div className="container cus mb-5">
      <h1 className="m-3 p-3">Tour Essaintial Items</h1>
      <div class="card-group">
        <div class="card">
          <img
            src="https://travellemming.com/wp-content/uploads/Mexico-Packing-Checklist.jpg"
            alt=""
          />
        </div>
        <div class="card">
          <img
            src="http://abeardabroad.com/wp-content/uploads/2019/02/OI000126.jpg"
            alt=""
          />
        </div>
        <div class="card">
          <img
            src="https://lh3.googleusercontent.com/proxy/IuEe3aus0f20SIzcQ_6SNRAP9Upuje6U067zvZvLI6HAYKPAJzskXA7QQ1h8YNa2i42ExE2k-vf2kxYdxBCVDuewRXPOHsaCARKWyrhRLkKwJPihLWFJ_JfLaX_NDLpXZ_1q9Ka8Qw"
            alt=""
          />
        </div>
        <div class="card">
          <img
            src="http://www.dwbikeclub.com/wp-content/uploads/2021/01/92641727_2921728264579146_1989656609327939584_o-1024x581.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TrevelItem;
