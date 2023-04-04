import { PostDataProps, PostResponseProps } from "../types/misdemeanours.types";

export const postData = async (apiPath: string, data: PostDataProps) => {
    const response = await fetch(apiPath, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
    });
    const responseData = (await response.json()) as PostResponseProps;
    return responseData;
};
