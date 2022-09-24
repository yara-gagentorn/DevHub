import React from 'react'

function TimeLine(props) {
  const startWorkDay = 8
  const finishWorkDay = 18
  //const timePeriods = props.timePeriods
  // props - array of objects, each object start time and end time
  // for each of 60 check if it is in the range of time in object from props
  // need to create an array of 60 elements, each element 1 or 0
  // map the array of objects
  const timePeriods = [
    { start: 10.25, finish: 12 },
    { start: 13, finish: 17.75 },
  ]

  // generate array from all objects, each number - on the floor
  function createArray(start, finish) {
    let i = start
    let array = []
    while (i <= finish) {
      array = [...array, i]
      i = i + 0.25
    }
    return array
  }

  let arrayOnTheFloor = []
  timePeriods.map((timePeriod) => {
    arrayOnTheFloor = arrayOnTheFloor.concat(
      createArray(timePeriod.start, timePeriod.finish)
    )
  })

  function dayTimeLine() {
    let array = []
    let i = startWorkDay
    while (i <= finishWorkDay) {
      array = [...array, i]
      i = i + 0.25
    }
    return array
  }

  const daytime = dayTimeLine()
  console.log(arrayOnTheFloor)

  return <>{daytime.map((time) => (arrayOnTheFloor.includes(time) ? 1 : 0))}</>
}

export default TimeLine
