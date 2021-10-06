interface IWebImage {
    url: string;
}

export interface IArtObject {
    id: string;
    title: string;
    principalOrFirstMaker: string;
    webImage: IWebImage;
}
