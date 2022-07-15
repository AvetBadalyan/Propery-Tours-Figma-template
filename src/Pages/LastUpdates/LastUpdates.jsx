import React from "react";
import "./LastUpdates.css";
import lastUpdates from "./../../assets/last updates image.png";
import LastUpdatesText from "../../Components/LastUpdatesText";

export default function LastUpdates() {
    return (
      <div className="last-updates">
        <div className="last-updates-left-half">
          <img src={lastUpdates} />
        </div>
            <div className="last-updates-right-half">
                <LastUpdatesText />
        </div>
      </div>
    );
}
