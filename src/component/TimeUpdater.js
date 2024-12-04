import React, { useState } from "react";

export const TimeUpdater = React.memo(({ children }) => {
    const [date, setDate] = useState(new Date());

    React.useEffect(() => {
        const handle = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(handle);
    }, [date]);
    return children({ date });
});
