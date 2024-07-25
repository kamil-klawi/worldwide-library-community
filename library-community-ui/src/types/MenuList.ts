export interface MenuListProps {
    arrayList: Array<Package>;
    classNameItem?: string;
    classNameLink?: string;
    classNameList?: string;
}

export type Package = {
    uri: string;
    name: string;
};
