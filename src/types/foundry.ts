declare global {
    const Hooks: {
        on(event: string, callback: (...args: any[]) => void): void;
        once(event: string, callback: (...args: any[]) => void): void;
        call(event: string, ...args: any[]): boolean;
    };

    interface JQuery {
        [index: number]: HTMLElement;
        appendChild(child: HTMLElement): void;
    }

    interface Actor {
        data: any;
        update(data: any): Promise<void>;
    }

    interface ActorSheet {
        actor: Actor;
        render(force?: boolean): void;
    }
}

export {};
