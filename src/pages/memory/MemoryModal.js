import React from 'react'
import styles from './Memory.module.css'
const MemoryModal = () => {
    return ( 
        <div className={styles.modalTextContainer}>
           <p> When we store variables in memory, what we are actually storing is binary values: a zero or a one.  On or off.  True, or false.</p>
            <p>Each of these zeros and ones is actually a teensy tiny switch.</p>
            <p>Flip the switch on, you get a 1.  Flip it off, a zero.</p>
            <p>Each of these switches is called a bit.</p>
            <p>8 of them grouped together is called a byte.</p>
            <p>On this page you can see three bytes, each byte has 8 bits.</p>
            <p>You can flip the switches to turn the bits on or off.</p>
            <p>You'll notice that different combinations of switches can be flipped to make different values.</p>
            <p>These switches are kind of like an abacus, but in base 2 rather than base 10 like we're used to.</p>
            <p>When we count in base 10, we count to 9 and then we go to the next column, but when we count in base 2, we count to 2 and then go to the next column.
                So, the switches here represent 1,2,4,8,16,32,64,128.  Just like with base 10 counting, if you add up the values you get a total.
                If you flip all of the switches and add up the values you get 255.  So, counting 0, there are 256 possible values in a byte!
            </p>
            <p>We can also create various tables to interpret these values.  So, we can say, let's make black = 0 and white = 255, then we can use our number to represent a greyscale value.  Or, we can make a table of ascii characters and assign each of them to a number between 0 and 255.  Or, we can use them to specify a color, by breaking the color into red, green and blue components, and we can use three bytes, each one representing a red value, a green value and a blue value.</p>
            <p>You can click the switches here to select various binary numbers, and their equivalents in decimal (base 10), binary (base 2), hexadecimal (base 16), ascii lookup, and color values!</p>
            <p>See if you can select the right combination of switches to spell your initials! The capital letters A-Z correspond to the decimal numbers 65-90 (hex numbers 41-5A!). </p>
        </div>
     );
}
 
export default MemoryModal;