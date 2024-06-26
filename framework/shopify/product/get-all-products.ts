import getAllProductsQuery from "./utils/queries/get-all-products";
import fetchApi from "./utils/queries/fetch-api";
import { ProductConnection  } from "../schema";  

type ReturnType ={
    products:ProductConnection
}

const getAllProducts = async ():Promise<any> =>{
    const {data} = await fetchApi<ReturnType> ({query:getAllProductsQuery})
    return data.products
}

export default getAllProducts