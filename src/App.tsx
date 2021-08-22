import {useEffect} from 'react'
import {Timeline, useTimelineEvents} from './Timeline/'
import {getCurrentTime, getPlaceholderEvent} from './Timeline/placeholderEvents'

export const App = () => {
  const [events, addEvent] = useTimelineEvents ({initial: {
    time: getCurrentTime (),
    title: 'Tam',
    description: 'This is the first event. The next one will appear in 20s!'
  }})

  useEffect (() => {
    const updateEvts = async () => addEvent (await getPlaceholderEvent ())
    const interval   = setInterval (updateEvts, 4000)
    return () => clearInterval (interval)
  })

  return (
    <main style={{maxWidth: 1100, margin: 'auto'}}>
      <Timeline events={events}/>
    </main>
  )
}
