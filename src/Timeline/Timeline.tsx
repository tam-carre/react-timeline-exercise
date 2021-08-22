import './Timeline.scss'
import {useState} from 'react'
import { add } from 'fp-ts-std/Number'
import {prepend, head} from 'fp-ts/lib/Array'
import {slice} from 'fp-ts-std/Array'
import {prop} from 'fp-ts-ramda'
import * as O from 'fp-ts/lib/Option'
import {flow, pipe} from 'fp-ts/lib/function'

export const Timeline = ({events, className = ""}: TimelineProps) => (
  <ul className={"tam-timeline " + className}>
    {events.map ((evt, i) => (
      <TimelineEvent
        time={evt.time}
        title={evt.title}
        description={evt.description}
        position={evt.position}
        key={evt.key}
        popIn={i === 0}
      />
    ))}
  </ul>
)

export const useTimelineEvents = ({initial, max = 5}: EventsHookProps) => {
  const initialEvts = initial
    ? [{...initial, key: 0, position: 'right' as const}]
    : []
  const [events, setEvents] = useState <InternalEventProps[]> (initialEvts)

  const addTimelineEvent = (event: EventProps) => {
    const position   = getNewPosition (events)
    const key        = getNewKey (events)
    const newEvt     = {...event, position, key} as InternalEventProps
    const newEvtList = pipe (events, prepend (newEvt), slice (0) (max))

    setEvents (newEvtList)
  }

  return [events, addTimelineEvent] as const
}

export interface EventProps {
  time: string
  title: string
  description: string
}

///////////////////////////////////////////////////////////////////////////////

const TimelineEvent = (props: InternalEventProps) => (
  <li className={`tam-timeline-event ${props.position}`}>
    <article className={props.popIn ? 'pop-in' : ''}>
      <header>
        <span className="timeline-title">{props.title}</span>
        <span className="timeline-time">{props.time}</span>
      </header>
      {props.description}
    </article>
  </li>
)

const getNewPosition = (events: InternalEventProps[]): EventPosition => pipe (
  head (events),
  O.map (flow (
    prop ('position'),
    position => position === 'right' ? 'left' : 'right'
  )),
  O.getOrElse (() => 'right' as EventPosition)
)

const getNewKey = (events: InternalEventProps[]): number => pipe (
  head (events),
  O.map (flow (
    prop ('key'),
    add (1)
  )),
  O.getOrElse(() => 0)
)

type EventPosition = 'left' | 'right'

interface EventsHookProps {
  initial?: EventProps
  max?: number
}

interface InternalEventProps extends EventProps {
  position: EventPosition
  key: number
  popIn?: boolean
}

interface TimelineProps {
  events: InternalEventProps[]
  max?: number
  className?: string
}
