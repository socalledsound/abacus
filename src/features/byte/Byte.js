import React from 'react'
import { useSelector } from 'react-redux'
import Bit from '../bit/Bit'
import { selectTotal, selectBits } from '../bit/bitSlice'
import styles from './Byte.module.css'

const Byte = ({byteIndex}) => {

  const total = useSelector(selectTotal)
  const numBits = useSelector(selectBits)
  const bits = Array.from({length: numBits}, (el, i) => i)


  // const convertUnicode = (input) => {
  //   return input.replace(/\\u[0-9a-fA-F]{4}/g,function(a,b) {
  //     var charcode = parseInt(b,16);
  //     return String.fromCharCode(charcode);
  //   });
  // }

  const hex = (total).toString(16) 
  console.log(hex)
  // const unicode = 
  // const letter =  `\u00${total}c`
  const letter = String.fromCodePoint(parseInt(total, 16))
  console.log(letter)
  


  return (
    <div className={styles.allBytesContainer}>
        <div className={styles.byteContainer}>

        {
            bits.map((bead, idx) => <Bit key={`bit${idx}`} bitIndex={idx} byteIndex={byteIndex}/>)
        }
        <div className={styles.resultsContainer}>
        <div>
          <p>{total}</p>
          <p>{hex}</p>
          <p>{letter}</p>
          <div className={styles.colorContainer}>
            <div 
              className={styles.colorValue} 
              style={{backgroundColor: `rgb(${total},${total},${total})`}}>

            </div>
          </div>
          </div>
         

      </div>
    </div>

    
    </div>
  )
}

export default Byte