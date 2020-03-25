import React from 'react'
import { BasicButton, Anchorlink, EmojiSpan } from '../../style/global-styles'

export const Footer = () => {
  return (
    <div>
      <BasicButton
        as="Anchorlink"
        href="https://www.skyscanner.net/news/tips/skyscanners-essential-packing-list"
      >
        See the list online
      </BasicButton>
      <Anchorlink href="https://www.charlottemdavies.co.uk">
        <EmojiSpan ariaRef="Charlotte Davies">👩🏻‍💻</EmojiSpan>
        Charly McDavies
      </Anchorlink>
    </div>
  )
}
