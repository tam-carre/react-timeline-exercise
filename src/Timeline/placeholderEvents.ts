import * as t from 'io-ts'
import {EventProps} from './Timeline'
import {Fetcher} from 'fetcher-ts'

export const getPlaceholderEvent = async (): Promise<EventProps> => {
  const {author, content} = await getQuote ()
  return {
    time: getCurrentTime (),
    title: author,
    description: content
  }
}

export const getCurrentTime = () => new Date ().toLocaleTimeString ()

///////////////////////////////////////////////////////////////////////////////

type ValidResponse = {code: 200, payload: Quote}

const getQuote = async () => {
  const endpoint = 'https://api.quotable.io/random'
  const [authorAndContent] =
    await new Fetcher <ValidResponse, AuthorAndContent> (endpoint)
      .handle (200, ({author, content}) => ({author, content}))
      .discardRest (() => ({
        author: "An error occurred.",
        content: "This quote couldn't be retrieved."
      }))
      .run ()

  return authorAndContent
}

const authorAndContent = t.type ({
  author: t.string,
  content: t.string,
})

const quote = t.intersection ([authorAndContent, t.type ({
  _id: t.string,
  tags: t.array (t.string),
  authorSlug: t.string,
  length: t.number,
  dateAdded: t.string,
  dateModified: t.string
})])

type AuthorAndContent = t.TypeOf<typeof authorAndContent>

type Quote = t.TypeOf<typeof quote>
