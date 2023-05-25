import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  })

  const getFetch = async () => {
    try {
      setState(prev => ({ ...prev, isLoading: true }))
      const response = await fetch(url)
      const parsedData = await response.json()
      setState(prev => ({ ...prev, data: parsedData, isLoading: false }))
    } catch (error) {
      setState(prev => ({ ...prev, hasError: error }))
    }
  }

  useEffect(() => {
    getFetch()
  }, [url])

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}

export { useFetch }
