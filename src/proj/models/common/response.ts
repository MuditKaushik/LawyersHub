export interface IResponseBody<T> {
    message?: string,
    success: boolean,
    result: T
}
