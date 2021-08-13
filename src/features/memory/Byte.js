import React from 'react'
import { useSelector } from 'react-redux'
import Bit from './Bit'
import { selectTotal, selectBits,  selectBitValuesByIndex } from './memorySlice'
import styles from './Byte.module.css'

const Byte = ({byteIdx}) => {

  const total = useSelector(selectTotal(byteIdx))
  const numBits = useSelector(selectBits)
  const bitValues = useSelector( selectBitValuesByIndex(byteIdx))
  console.log(bitValues)
  // const reversedBitValues = 
  // console.log(reversedBitValues)
  let binary = bitValues.map(el => el ? 0 : 1)
  console.log(binary)
  const bits = Array.from({length: numBits}, (el, i) => i)
  const hex = (total).toString(16) 
  const letter = String.fromCodePoint(parseInt(total, 16))
  


  return (
    <div className={styles.allBytesContainer}>
        <div className={styles.byteContainer}>

        {
            bits.map((bead, bitIdx) => <Bit key={`bit${bitIdx}`} bitIdx={bitIdx} byteIdx={byteIdx}/>)
        }
        <div className={styles.resultsContainer}>
        <div>
          <p>base 10: {total}</p>
          <p>hex: {hex} </p>
          <p>binary : {binary.reverse()}</p>
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