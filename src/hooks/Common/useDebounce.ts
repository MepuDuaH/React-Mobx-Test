import React, {useState, useEffect} from 'react';

export const useDebounce = (callBack, delay) => {
    const [debounced, setDebounced] = useState<boolean>(false);
    
    const handler = () => {
        if(debounced) return;

        callBack();
        setDebounced(true);
    };

    useEffect(() => {
        const _t = setTimeout(() => setDebounced(false), delay);

        return () => {
            clearTimeout(_t);
        };
    }, [debounced]);

    return handler;
};