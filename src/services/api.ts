  
import axios from 'axios' 
 

const createInstance = (baseURL: string, type?: string) => {
  const instance = axios.create({
    baseURL,
    headers: {
      Accept: type || 'application/json'
    }
  })

  instance.interceptors.request.use(
    async (config): Promise<unknown> => {
      return config
    },
    async (error) => {
      return await Promise.reject(error)
    }
  )

    

  return instance
}

export const instance = createInstance(process.env.REACT_APP_BASE_URL ?? '')
 