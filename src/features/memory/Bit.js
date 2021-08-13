import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectBitValue, selectBitState, toggleBit } from './memorySlice'
import styles from './Bit.module.css'

//const beadColors = ['red', 'green', 'blue', 'grey', 'black', 'pink', 'purple', 'yellow']

const Bit = ({byteIdx, bitIdx}) => {

    
    const value = useSelector(selectBitValue(byteIdx, bitIdx))
    const toggled = useSelector(selectBitState(byteIdx, bitIdx))
    // console.log(byteIdx, bitIdx, toggled)
    const dispatch = useDispatch()
    // const [beadVal, toggleBeadVal] = useState(true)
    //console.log(value)
    return (
        <div className={styles.bitContainer}>
           
            <div className={styles.valueContainer}>
                    <p 
                        className={styles.value}
                        // style={{
                        //         left: `${100 + byteIndex * 200 }px`
                        //     }}
                    >
                        {toggled ? 0 : value}
                    </p>
            </div>
            <div 
                onClick={() => dispatch(toggleBit({byteIdx, bitIdx}))} 
                className={styles.bit}
                style={{
                        top: `${bitIdx * 60 + 50}px`, 
                        marginLeft: `${toggled ? `${20}px` : `${0}px`}`,
                        backgroundColor: 'red'
                        // backgroundColor: beadColors[idx]
                    }}
            >
            
            </div>
        </div>
    )
}

export default Bit