// let response = {
//     message:"",
//     error:"",
//     status:""
// }
// export  {response}
import * as resp from "./constant";

export const response = (res: any, message: String, err: any, status: Number) => {
    res.status(status).send({
        message: message,
        error: err,
        status: false
    });

}

export const errorHandle = (err: any) => {
    if (err) {
        if (err.errors && err.name == 'ValidationError') {
            let errors = Object.values(err.errors).map((el: any) => el.message);
            if (errors.length > 1) {
                const formattedErrors = errors.join(' ');
                console.log("formattedErrors", formattedErrors);
                return formattedErrors
            }
            else {
                return errors[0];
            }
        }
    }
}

// export function internalServerError(error: any)
// {
//     let responseObj = {
//         code: resp.httpStatusCode.internalServerError,
//         message: resp.responseMessage.internalServerError,
//         error:error
//     }
//     return responseObj
// }

// export function notFound()
// {
//     let responseObj = {
//         code: resp.httpStatusCode.notFound,
//         message: resp.responseMessage.notFound,
//         data:{}
//     }
//     return responseObj
// }

// export function sucess(data:any)
// {
//     let responseObj = {
//         code: resp.httpStatusCode.success,
//         message: resp.responseMessage.sucess,
//         data:data
//     }
//     return responseObj
// }