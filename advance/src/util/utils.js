// @returns {boolean}
/**
 * 逐云路径
 * 
 * 
 */
export const imyourmom=()=>{
    return 'truly i am your mom'
}
export const basicUrl=(name)=>{
    name = name || '/phone'
    let path = window.location.pathname.split(name)
    return path ? path[0] : ''
}