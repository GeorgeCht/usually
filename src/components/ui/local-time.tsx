'use client'

import React, { useState, useEffect } from 'react'

const TimeInAthens: React.FC = () => {
  const [hours, setHours] = useState<string>('')
  const [minutes, setMinutes] = useState<string>('')
  const [ampm, setAmpm] = useState<string>('')

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch(
          'http://worldtimeapi.org/api/timezone/Europe/Athens'
        )
        const data = await response.json()
        const dateTime = new Date(data.utc_datetime)
        const hours = dateTime.getHours()
        const minutes = dateTime.getMinutes()
        const formattedHours = hours % 12 || 12

        setAmpm(hours >= 12 ? 'pm' : 'am')
        setHours(formattedHours.toString().padStart(2, '0'))
        setMinutes(minutes.toString().padStart(2, '0'))
      } catch (error) {
        return
      }
    }

    const interval = setInterval(fetchTime, 1000 * 60) // Update time min
    fetchTime() // Fetch time immediately when component mounts
    return () => clearInterval(interval) // Cleanup interval on unmount
  }, [])

  return (
    <p
      className={
        'font-aeonik font-semibold text-xl leading-tight cursor-default'
      }
    >
      Athens, Greece {hours}
      <span className={'animate-blink'}>:</span>
      {minutes} {ampm}
    </p>
  )
}

export { TimeInAthens }
