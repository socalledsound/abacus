import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectBitValue, selectBitState, toggleBit } from './bitSlice'
import styles from './Bit.module.css'

//const beadColors = ['red', 'green', 'blue', 'grey', 'black', 'pink', 'purple', 'yellow']

const Bit = ({byteIndex, bitIndex}) => {

    
    const value = useSelector(selectBitValue(bitIndex))
    const toggled = useSelector(selectBitState(bitIndex))
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
                onClick={() => dispatch(toggleBit(bitIndex))} 
                className={styles.bit}
                style={{
                        top: `${bitIndex * 60 + 50}px`, 
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