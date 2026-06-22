import React from 'react'

const Test = () => {
    const arr = [10, 20, 30, 40, 50];
    const sumCal = arr.reduce((acc, curr)=>acc + curr,0)
    console.log(`${sumCal} Sum Calculating`)
  return (
    <div>
        
        
    </div>
  )
}

export default Test