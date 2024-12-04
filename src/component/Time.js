import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { TimeUpdater } from "./TimeUpdater";

const Time = React.memo(() => {
    return (
        <div className="time">
            <label htmlFor="time">
                <FontAwesomeIcon icon={faClock} className="ic-gray" /> 현재시간
            </label>
            <TimeUpdater>
                {({ date }) => (
                    <input id="time" className="userInfo__time" value={date.toLocaleTimeString()} readOnly></input>
                )}
            </TimeUpdater>
        </div>
    );
});

export default Time;
