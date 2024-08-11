export interface input_props {
    type: string;
    placeholder: string;
    name: string;
}

export interface listProps {
    title: string;
    cont: string
}

export interface ReactChild { children: React.ReactNode }

export interface AuthProp {
    user?: string
}
