import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { dateState } from "../store-recoil/saveInfo";
import React, { useEffect } from "react";
import { TimeUpdater } from "./TimeUpdater"

const Time = React.memo(() => {
    const date= useRecoilValue(dateState);

    // useEffect(() => {
    //     setDate(new Date());
    //     let timeInterval = setInterval(() => setDate(new Date()), 1000);
    //     return () => {
    //         clearInterval(timeInterval);
    //     };
    // }, []);

    return (
        <div className="time">
            <label htmlFor="time">
                <FontAwesomeIcon icon={faClock} className="ic-gray" /> 현재시간
            </label>
            <TimeUpdater />
            <input id="time" className="userInfo__time" value={date.toLocaleTimeString()} readOnly></input>
        </div>
    );
});

export default Time;
