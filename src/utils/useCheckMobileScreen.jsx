import { useCallback, useEffect, useState } from "react"

const useCheckMobileScreen = () => {
  const [width, setWidth] = useState(window?.innerWidth)
  
  const handleWindowSizeChange = useCallback(() => {
    setWidth(window?.innerWidth)
  }, [])

  useEffect(() => {
    window?.addEventListener("resize", handleWindowSizeChange)
    return () => {
      window?.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [])
  return width <= 1239
}

export default useCheckMobileScreen