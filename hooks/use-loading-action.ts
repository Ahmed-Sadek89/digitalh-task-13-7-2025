'use client'

import { useCallback, useState } from 'react'

const useLoadingAction = () => {
  const [isLoading, setIsLoading] = useState(false)

  const startLoading = useCallback(() => {
    setIsLoading(true)
  }, [])

  const stopLoading = useCallback(() => {
    setIsLoading(false)
  }, [])

  return { isLoading, startLoading, stopLoading }
}

export default useLoadingAction
