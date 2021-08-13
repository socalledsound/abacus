import React, {Fragment} from 'react'
import { useSelector } from 'react-redux'
import useModal from '../../components/Modal/useModal'
import { selectBytes, selectTotal } from '../../features/memory/memorySlice' 
import Byte from '../../features/memory/Byte'
import styles from './Memory.module.css'


const Memory = () => {

    const { ModalContent } = useModal();
    const bytesValue = useSelector(selectBytes)
    const bytes = Array.from({length: bytesValue}, (el, i) => i)
    // const allBitValues = useSelector(selectAllBitValues())
  
    const red = useSelector(selectTotal(0))
    const green = useSelector(selectTotal(1))
    const blue = useSelector(selectTotal(2))

    return ( 
        <Fragment>
        <div className={styles.abacusContainer}>
        {
          bytes.map((byte, byteIdx) => <Byte key={`byte${byteIdx}`} byteIdx={byteIdx}/>)
        }
        <div className={styles.combinedBytes}>
          <h3>combined bytes</h3>
          <p>
            rgb : r: {red}, g: {green} b: {blue}
          </p>
          <p>
          hex: {`#${(red).toString(16)}${(green).toString(16)}${(blue).toString(16)}`}
          </p>
            
         
          <div style={{width: '200px', height: '200px', backgroundColor: `rgb(${red},${green},${blue})`}}/>

          
        </div>
        
      </div>

        <ModalContent>
            this is going to be a description of what this page is
        </ModalContent>
        </Fragment>
     );
}
 
export default Memory;