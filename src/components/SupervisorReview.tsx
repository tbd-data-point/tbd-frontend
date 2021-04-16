import { useState } from 'react'
import { animated as a } from 'react-spring'
import { useSprings } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import styled from 'styled-components'

const Wrapper = styled(a.div)`
  & > img {
    max-width: 50vw;
    max-height: 50vh;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    pointer-events: none
  }
  &:active {
    cursor: grabbing;
  }
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  position: absolute;
  -webkit-touch-callout: none; 
  -webkit-user-select: none; 
  -khtml-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 
`

const PhotoLabel = styled(a.div)`
  height: 15%;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: white;
`

const SupervisorReview = () => {
  const swipeThreshold = 125
  const [gone] = useState(() => new Set<number>())
  const zIndex = (i:number) => { return 10 - i + gone.size }
  const [photos, updatePhotos] = useState([{id: 0, src: 'https://www.w3schools.com/w3css/img_lights.jpg'}, {id: 1, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Free_logo.svg/1200px-Free_logo.svg.png'}, {id: 2, src: 'https://picjumbo.com/wp-content/uploads/sunset-ocean-1080x720.jpg'}, {id: 3, src: 'https://free-now.com/fileadmin/Markets/Press/General/free-now-logo-rec-blue.png'}])
  const addPhoto = () => {
    updatePhotos([...photos, {id: photos.length, src: 'https://www.w3schools.com/w3css/img_lights.jpg'}])
  }
  const restCallback = (i: number, dir:number) => {
    // TODO reqeust handling getting new directory and updating status of the photo
    gone.add(i)
    console.log(`Photo number ${i} is ${dir > 0 ? 'good' : 'bad'}`)
    setTimeout(() => {
      addPhoto()
    }, 200)
    
  }
  const [items, set] = useSprings(photos.length, index => ({xy: [0, 0], zIndex: zIndex(index), o: 0}))
  const bind = useDrag(({args: [index], down, movement}) => {
    const dir = movement[0] > 0 ? 1 : -1
    const trigger = Math.abs(movement[0]) > swipeThreshold && !down
    //@ts-expect-error
    set(i => {
      if (i !== index) return
      return {xy: trigger ? [(window.innerWidth + 300) * dir, 0] : down ? movement : [0, 0],
         zIndex: zIndex(i), 
         o: down ? movement[0] / swipeThreshold : 0,
         onRest: trigger ? restCallback(i, dir) : () => {}}
    })
  })

  return (<>
  {items.map(({xy, zIndex, o}, i) => 
    gone.has(photos[i].id)
    ? null
    : <Wrapper key={i} style={{
        //@ts-expect-error
        transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0px) rotate(${x / 50 > 45 ? 45 : x / 50}deg)`),
        zIndex: zIndex
        }}{...bind(photos[i].id)}>
          <PhotoLabel style={{
            background: o.interpolate(o => o > 0 ? `rgb(128, 204, 8)` : `rgb(216, 14, 53)`),
            opacity: o.interpolate(o => Math.abs(o))
          }}
          >{o.interpolate((o) => o > 0 ? 'Good' : 'Bad')}</PhotoLabel>
          <img alt='' src={photos[i].src}></img>
      </Wrapper>
      )
  }
  </>)
}
  


export default SupervisorReview