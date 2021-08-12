import React from 'react'
import { useSelector } from 'react-redux'
import { selectBytes } from './features/byte/byteSlice' 
import Byte from './features/byte/Byte'
import styles from './App.module.css'

const App = () => {
  
  
const bytesValue = useSelector(selectBytes)
const bytes = Array.from({length: bytesValue}, (el, i) => i)

return (
  <div className={styles.abacusContainer}>
    {
      bytes.map((byte, byteIdx) => <Byte key={`byte${byteIdx}`} byteIndex={byteIdx}/>)
    }
    
  </div>
)  

}
export default App