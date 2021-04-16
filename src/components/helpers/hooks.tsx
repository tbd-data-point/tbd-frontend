import { useEffect, useState } from 'react'

const useKeyPress = (keyCode: string) => {
    const [isDown, setDown] = useState(false)
    const downHandler = (e: KeyboardEvent) => {
        if (e.code === keyCode) {
            setDown(true)
        }
    }
    const upHandler = (e: KeyboardEvent) => {
        if (e.code === keyCode) {
            setDown(false)
        }
    }
    useEffect(() => {
         document.addEventListener('keydown', downHandler)
         document.addEventListener('keyup', upHandler)
         return () => {
             document.removeEventListener('keydown', downHandler)
             document.removeEventListener('keyup', upHandler)
         }
    })
    return isDown
}

export { useKeyPress }