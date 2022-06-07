export type Action = {
    type: "ADD_TOKEN"; // tipo da informação
    payload: string; // a informação
}

export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token

})