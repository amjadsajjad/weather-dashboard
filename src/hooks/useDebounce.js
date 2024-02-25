import { useEffect, useRef } from "react"

const useDebounce = (callBack, delay) => {

    const timeoutIdRef = useRef(null);

    useEffect(() => {

        return () => {
            if(timeoutIdRef.current){
                clearTimeout(timeoutIdRef.current);
            }
        }

    }, [])



    const debounceCallBack = (...args) => {

        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current)
        }
        timeoutIdRef.current = setTimeout(() => {
            callBack(...args)
        }, delay);


    }

    return debounceCallBack;
}

export default useDebounce;