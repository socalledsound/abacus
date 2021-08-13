import React from 'react'
import { useSelector } from 'react-redux'
import { selectBytes, selectTotal } from './features/memory/memorySlice' 
import Byte from './features/memory/Byte'
import styles from './App.module.css'

const App = () => {
  
  const bytesValue = useSelector(selectBytes)
  const bytes = Array.from({length: bytesValue}, (el, i) => i)
  // const allBitValues = useSelector(selectAllBitValues())

  const red = useSelector(selectTotal(0))
  const green = useSelector(selectTotal(1))
  const blue = useSelector(selectTotal(2))

  return (
      <div className={styles.abacusContainer}>
        {
          bytes.map((byte, byteIdx) => <Byte key={`byte${byteIdx}`} byteIdx={byteIdx}/>)
        }
        <div >
          <p>
            rgb : r: {red}, g: {green} b: {blue}
          </p>
          <p>
          hex: {`#${(red).toString(16)}${(green).toString(16)}${(blue).toString(16)}`}
          </p>
            
         
          <div style={{width: '200px', height: '200px', backgroundColor: `rgb(${red},${green},${blue})`}}/>

          
        </div>
        
      </div>
  )  

}
export default App