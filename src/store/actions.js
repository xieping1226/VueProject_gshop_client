/*
包含n个用于间接更新状态数据方法的对象
 */
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUser,
  reqLogout,
  reqInfo,
  reqRatings,
  reqGoods
} from '../api'

import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'

export default {

  // 异步获取address
  async getAddress ({commit, state}) {
    // 发送ajax请求
    const {latitude, longitude} = state
    const result = await reqAddress(latitude+','+longitude)   // {code: 0, data: address}
    if(result.code===0) {
      const address = result.data
      // commit给mutation
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  // 异步获取categorys
  async getCategorys ({commit}) {
    // 发送ajax请求
    const result = await reqFoodCategorys()
    if(result.code===0) {
      const categorys = result.data
      // commit给mutation
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },


  // 异步获取shops
  async getShops ({commit, state}) {
    // 发送ajax请求
    const {latitude, longitude} = state
    const result = await reqShops(longitude, latitude)
    if(result.code===0) {
      const shops = result.data
      // commit给mutation
      commit(RECEIVE_SHOPS, {shops})
    }
  },

  saveUser({commit},user){
    commit(RECEIVE_USER,{user})
  },

  async getUser({commit}){
    const result=await reqUser()
    if(result.code===0){
      const user=result.data
      commit(RECEIVE_USER,{user})
    }
  },

  async logout({commit}){
    const result=await reqLogout()
    if(result.code===0){
      commit(RESET_USER)
    }
  },

  // 异步获取goods数据
  async getGoods ({commit}, cb) {
    const result = await reqGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      typeof cb === 'function' && cb()

    }
  },

  // 异步获取ratings数据
  async getRatings ({commit},cb) {
    const result = await reqRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      typeof cb === 'function' && cb()

    }
  },

  // 异步获取info数据
  async getInfo ({commit},cb) {
    const result = await reqInfo()
    if(result.code===0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
      typeof cb === 'function' && cb()

    }
  },

  updateFoodCount({commit},{isAdd,food}){
    if(isAdd){
      commit(INCREMENT_FOOD_COUNT,{food})
    }else{
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  },

  clearCart({commit}){
    commit(CLEAR_CART)
  }
}


