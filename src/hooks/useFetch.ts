import { AxiosInstance } from 'axios'
import { useEffect, useState } from 'react'

interface FetchState<T> {
  isLoading: boolean
  apiData: T | null
  error: Error | null
}

export const useFetch = <T>(
  apiInstance: AxiosInstance,
  dependencyKey?: string,
) => {
  const [fetchState, setFetchState] = useState<FetchState<T>>({
    isLoading: true,
    apiData: null,
    error: null,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get<T>('/')
        setFetchState({
          isLoading: false,
          apiData: response.data,
          error: null,
        })
      } catch (error) {
        setFetchState({
          isLoading: false,
          apiData: null,
          error: error as Error,
        })
      }
    }

    fetchData()
  }, [apiInstance, dependencyKey])

  return fetchState
}
