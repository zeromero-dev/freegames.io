import { useState, useEffect } from 'react'


export const ScrollButton = () => {

    const [isVisible, setIsVisible] = useState(false);

    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', () => window.scrollY > 1000 ? setIsVisible(true) : setIsVisible(false))
    }, [])


    return (
        <div className='fixed bottom-2 right-2'>
            <button
                type='button'
                onClick={scrollUp}
                className={`${isVisible ? 'visible' : 'invisible'} btn btn-primary w-12`}>
                ↑
            </button>
        </div>
    )
}


