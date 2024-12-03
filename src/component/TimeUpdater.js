import React from "react";
import { useRecoilState } from "recoil";
import { dateState } from "../store-recoil/saveInfo";

export const TimeUpdater = React.memo(() => {
    const [date, setDate] = useRecoilState(dateState);
    
    React.useEffect(() => {
        const handle = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(handle)
    }, [])
    return null
})