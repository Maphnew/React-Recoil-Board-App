import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { dateState } from "../store-recoil/saveInfo";
import { useEffect } from "react";

const Time = () => {
    const [date, setDate] = useRecoilState(dateState);

    useEffect(() => {
        setDate(new Date());
        let timeInterval = setInterval(() => setDate(new Date()), 1000);
        return () => {
            clearInterval(timeInterval);
        };
    }, []);

    return (
        <div className="time">
            <label htmlFor="time">
                <FontAwesomeIcon icon={faClock} className="ic-gray" /> 현재시간
            </label>
            <input id="time" className="userInfo__time" value={date.toLocaleTimeString()} readOnly></input>
        </div>
    );
};

export default Time;
