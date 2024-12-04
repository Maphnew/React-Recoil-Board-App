import Icon from "./Icon";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import TimeUpdater from "./TimeUpdater";
import React from "react";

const Time = () => {
    console.info("Time render");
    return (
        <div className="time">
            <label htmlFor="time">
                <Icon icon={faClock} className="ic-gray" /> 현재시간
            </label>
            <TimeUpdater>
                {({ date }) => (
                    <input id="time" className="userInfo__time" value={date.toLocaleTimeString()} readOnly></input>
                )}
            </TimeUpdater>
        </div>
    );
};

export default React.memo(Time);
