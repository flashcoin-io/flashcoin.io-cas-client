declare module "preact-router" {
    import { Component } from "preact";

    export interface RouteProps {
        path?: string,
        default?: boolean,
    }

    export interface ViewProps {
        url?: string,
        matches?: Object,
    }

    interface RouterComponentProps {
        url?: string,
        static?: boolean,
        onChange?: (params: {
            router: Router,
            url: string,
            previous: string,
            active: JSX.Element,
            current: JSX.Element,
        }) => void,
        history: any
    }

    export class Router extends Component<RouterComponentProps, void> {
        render(props: RouterComponentProps, state: void): JSX.Element;
    }

    interface RouteComponentProps extends RouteProps {
        component: JSX.Element,
    }

    export class Route extends Component<RouteComponentProps, void> {
        render(props: RouteComponentProps, state: void): JSX.Element;
    }

    interface LinkProps {
        [key: string]: string,
    }

    export class Link extends Component<LinkProps, void> {
        render(props: LinkProps, state: void): JSX.Element;
    }

    export function route(url: string, replace?: boolean): boolean;

    export default Router;
}