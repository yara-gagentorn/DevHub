import React from 'react'

function TimeLine(props) {
  const startWorkDay = 8
  const finishWorkDay = 18
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

  return (
    <>
      {/* {daytime.map((time) => (arrayOnTheFloor.includes(time) ? 1 : 0))} */}
      <div className="inline-block">
        {daytime.map((time) =>
          arrayOnTheFloor.includes(time) ? (
            <div key={time} className="inline-block w-3 h-3 bg-lime-900"></div>
          ) : (
            <div key={time} className="inline-block w-3 h-3 bg-lime-100"></div>
          )
        )}
      </div>
    </>
  )
}

export default TimeLine
