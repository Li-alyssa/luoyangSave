//API进行统一管理
//引入二次封装的axios(带有响应请求拦截器)
import requests from './request';


// export const reqPageList = (page, pageSize) => {
//     //发请求
//     return requests({
//         url: `/mskCommand/mskCommand/showTableList/${page}/${pageSize}`,
//         method: 'get'
//     })
// }



export const reqTimeList = () => {
    //发请求
    return requests({
        url: '/timeTable/get',
        method: 'get'
    })
}





export const reqGetchain = () => {
    //发请求
    return requests({
        url: '/msk/chain/getchain',
        method: 'post'
    })
}
export const reqGetLoss = () => {
    //发请求
    return requests({
        url: '/msk/chain/getLoss',
        method: 'post'
    })
}
export const reqGetvalid = () => {
    //发请求
    return requests({
        url: '/msk/chain/getvalid',
        method: 'post'
    })
}
// export const reqDownload = (time) => {
//     return requests({
//         url: `/mskCommand/mskCommand/getdata?time=${time}`,
//         method: 'get'
//     })
// }