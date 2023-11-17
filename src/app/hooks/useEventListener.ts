import { useEffect, useRef, RefObject } from "react";

type EventListener<T extends Event> = (event: T) => void;

function useEventListener<T extends Event>(
    eventType: string,
    callback: EventListener<T>,
    element: HTMLElement | Window | Document | null = window
): void {
    const callbackRef = useRef<EventListener<T> | null>(null);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!element) return;

        const handler = (e: Event) => {
            if (callbackRef.current) {
                callbackRef.current(e as T); // Type assertion here
            }
        };

        element.addEventListener(eventType, handler);

        return () => {
            element.removeEventListener(eventType, handler);
        };
    }, [eventType, element]);
}

export {useEventListener}