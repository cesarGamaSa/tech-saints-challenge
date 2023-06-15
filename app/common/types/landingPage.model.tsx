export interface LandingPage {
    title: string;
    subTitle: string;
    image: Image;
    userName: string;
    userImage: Image;
    sys: {
        id: string;
    }
}

export interface Image {
    fileName: string;
    url: string;
}
