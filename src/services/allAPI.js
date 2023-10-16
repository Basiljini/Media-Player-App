import {BASE_URL} from './baseURL'
import { commonAPI } from './commonAPI'


// uploading video
export const uploadVideo = async(video)=>{
        //   post to http://localhost:4000/videos for adding video in json server and return response to add component
      return await commonAPI("POST",`${BASE_URL}/videos`,video)
}

// get all  videos from json server

export const getAllVideos = async ()=>{
    //   get request to http://localhost:4000/videos for getting video from json server and return response to view component   
    return await commonAPI("GET",`${BASE_URL}/videos`,"")
}

// get a single video from json server
export const getAVideo = async (id)=>{
    //   get request to http://localhost:4000/videos/id for getting video from json server and return response to VideoCard component   
    return await commonAPI("GET",`${BASE_URL}/videos/${id}`,"")
}

// delete a video from json server
export const deleteAVideo = async (id)=>{
    //   get request to http://localhost:4000/videos/id for getting video from json server and return response to VideoCard component   
    return await commonAPI("DELETE",`${BASE_URL}/videos/${id}`,{})
}

// ...................HISTORY...................

// post video watch history to json
export const addToHistory = async (videoHistory)=>{
  // http post request to https://localhost:400/history for adding video history to json server and return response to VideoCard
  return await commonAPI("POST",`${BASE_URL}/history`,videoHistory)
}

// get video watch history from json
export const getHistory = async ()=>{
// http get request to https://localhost:400/history for getting video history from json server and return response to watcHistory
return await commonAPI("GET",`${BASE_URL}/history`,"")
}

// delete a video watch history from json server
export const deleteHistory = async (id)=>{
  //   get request to http://localhost:4000/history/id for deleting video history from json server and return response to watchHistory component   
  return await commonAPI("DELETE",`${BASE_URL}/history/${id}`,{})
}


// ..............CATEGORY.........................


// add new category
export const addCategory = async(body)=>{
    //   post to http://localhost:4000/categories for adding new category in json server and return response to category component
  return await commonAPI("POST",`${BASE_URL}/categories`,body)
}

// get all category
export const getAllCategory = async()=>{
    //   get request to http://localhost:4000/categories for getting categories from json server and return response to category component
  return await commonAPI("GET",`${BASE_URL}/categories`,"")
}

// remove category

export const deleteCategory = async (id)=>{
      //   get request to http://localhost:4000/categories/id for deleting category from json server and return response to Category component   
 return await commonAPI("DELETE",`${BASE_URL}/categories/${id}`,{})
}

// update category

export const updateCategory = async (id,updatedCategory)=>{
 //   get request to http://localhost:4000/categories/id for updating category from json server and return response to Category component   
 return await commonAPI("PUT",`${BASE_URL}/categories/${id}`,updatedCategory)
}