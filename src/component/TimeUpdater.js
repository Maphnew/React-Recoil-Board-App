import React, { useState, useEffect } from "react";

const TimeUpdater = React.memo(({ children }) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const handle = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(handle);
    }, [date]);
    return children({ date });
});

export default React.memo(TimeUpdater);
