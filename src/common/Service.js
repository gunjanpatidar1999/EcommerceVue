import axios from 'axios';
import {MAIN_URL} from '@/common/Url';


 export function userLogin(data)
 {
        return axios.post(`${MAIN_URL}login`,data)
 }
 export function userRegister(data)
 {
     return axios.post(`${MAIN_URL}register`,data)
 }
   
export function userContact(data)
{
    return axios.post(`${MAIN_URL}contact`,data)
}

export function Category()
{
    return axios.get(`${MAIN_URL}category`)
}

export function categoyproduct(id)
{
    return axios.get(`${MAIN_URL}categories/${id}`)
}

export function product()
{
    return axios.get(`${MAIN_URL}product`)
}

export function singleproduct(id)
{
    return axios.get(`${MAIN_URL}singleproduct/${id}`)
}

export function userorder(data)
{
    return axios.post(`${MAIN_URL}order`,data)
}

export function useraddress(data)
{
    return axios.post(`${MAIN_URL}address`,data)
}

export function coupons()
{
    return axios.get(`${MAIN_URL}coupon`)
}

export function changepassword(data)
{
    return axios.post(`${MAIN_URL}changepassword`,data)
}

export default {userLogin,userRegister,userContact,Category,categoyproduct,userorder,useraddress,changepassword};