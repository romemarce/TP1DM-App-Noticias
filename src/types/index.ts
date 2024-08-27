export interface IError {
    isError: boolean,
    title?: string,
    code?: number,
    message: string
}
export const initIError: IError = {
    isError: false,
    message: ""
}