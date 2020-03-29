import { useEffect, Component } from 'react'
import { useRouter } from 'next/router'
function Index() {
    const router = useRouter()

    useEffect(() => {
      // Always do navigations after the first render
      router.push('/search/post')
    }, [])
  return (
    <div>
  
    </div>
  )
}

export default Index