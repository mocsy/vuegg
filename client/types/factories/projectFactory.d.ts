export default newProject;
declare function newProject(title: any): {
    id: any;
    title: any;
    components: any[];
    pages: {
        id: any;
        name: any;
        path: any;
        width: any;
        height: any;
        styles: {
            '--mdc-theme-primary': string;
            '--mdc-theme-secondary': string;
            '--mdc-theme-background': string;
            position: string;
            margin: string;
            'background-color': string;
            overflow: string;
        };
        classes: any[];
        children: any[];
    }[];
};
