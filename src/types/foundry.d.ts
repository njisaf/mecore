declare global {
    const Hooks: {
        once(hook: string, callback: (...args: any[]) => void): void;
        on(hook: string, callback: (...args: any[]) => void): void;
    };

    interface JQuery {
        [key: number]: HTMLElement;
        appendChild(child: HTMLElement): void;
    }
}

export {};
