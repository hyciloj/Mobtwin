import {Dispatch, RefObject, SetStateAction, useCallback, useEffect, useMemo, useState} from "react";
import { useEventListener } from "./useEventListener";

type HoveredCallback = (e: MouseEvent) => void;

function useHover(
    ref: RefObject<HTMLElement>,
    cb: Dispatch<SetStateAction<boolean>>,
): void {

    const handleHovered: HoveredCallback = useCallback((e) => {

        if (ref.current == null || ref.current.contains(e.target as Node)) {
            let a = ref.current?.dataset.ktAsideMinimize
            if (a == "on") {
                cb(true);
            }
            return;
        } else {
            console.log("else")

            cb(false)
        }

    }, [ref]);

    const memoizedHandleHovered = useMemo(() => handleHovered, [handleHovered]);

    useEventListener<MouseEvent>("mouseover", memoizedHandleHovered, document);

    useEffect(() => {
        return () => {
            // Clean up the event listener on component unmount
            document.removeEventListener("mouseover", memoizedHandleHovered);
        };
    }, [memoizedHandleHovered]);
}

export {useHover}
