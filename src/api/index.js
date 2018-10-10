import ajax from './ajax'

export const reqAddress=(geohash)=>ajax('/api/position/'+geohash)

export const reqFoodCategorys=()=>ajax('/api/index_category')

export const reqShops=(longitude, latitude)=>ajax('/api/shops', {latitude, longitude})

