export interface IFormBanner {
    imageFile: File | null;
    name: string;
    type: string;
    link?: string;
    status: string;
    imageURL: string;
    id?: number;
}

export interface IBanner {
    banner: [] | { id: number, name: string, }[];
    isLoading: boolean;
}