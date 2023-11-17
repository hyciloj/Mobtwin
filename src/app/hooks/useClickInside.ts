import { RefObject, useEffect } from "react";
import { useEventListener } from "./useEventListener";

type ClickOutsideCallback = (e: MouseEvent) => void;

function useClickInside(
    ref: RefObject<HTMLElement>,
    cb: ClickOutsideCallback,
): void {
    const handleClickOutside: ClickOutsideCallback = (e) => {
        if (ref.current && !ref.current.contains(e.target as Node)) return;
        cb(e);
    };

    useEventListener<MouseEvent>("click", handleClickOutside, document);

    useEffect(() => {

        return () => {
            // Clean up the event listener on component unmount
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref, cb]);
}

export {useClickInside}