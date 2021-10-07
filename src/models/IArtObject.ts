interface IWebImage {
    url: string;
}

export interface IArtObject {
    objectNumber: string;
    title: string;
    principalOrFirstMaker: string;
    webImage: IWebImage;
}
