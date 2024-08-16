import React from 'react'
import AskCookbook from '@cookbookdev/docsbot/react'
import BrowserOnly from '@docusaurus/BrowserOnly'
import OriginalSearchBar from '@theme-original/SearchBar'
import { TraceEvent } from '@uniswap/analytics'
import { BrowserEvent, SharedEventName } from '@uniswap/analytics-events'

/** It's a public API key, so it's safe to expose it here */
const COOKBOOK_PUBLIC_API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWMxOGQyNTA1MjA1MDZmZmEwMDhjMzYiLCJpYXQiOjE3MDcxODMzOTcsImV4cCI6MjAyMjc1OTM5N30.j1gfmvmmfz_cLwAheAI3_mrGiseW_KnGm_MQ1_VbeSY'

export default function SearchBarWithAnalytics(props) {
  return (
    <>
      <TraceEvent events={[BrowserEvent.onClick]} name={SharedEventName.SEARCH_BAR_CLICKED}>
        {/* Required for onClick to register */}
        <div>
          <OriginalSearchBar {...props} />
        </div>
      </TraceEvent>
      <BrowserOnly>{() => <AskCookbook apiKey={COOKBOOK_PUBLIC_API_KEY} /> }</BrowserOnly>
    </>
  )
}
