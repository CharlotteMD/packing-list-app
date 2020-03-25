import React from 'react'
import { H1 } from '../../style/global-styles'
import { FontGrow } from '../../style/keyframe-animations'

export const Header = () => {
  return (
    <div>
      <H1 textColor="orange">Let's send you packing!</H1>
      <FontGrow>
        <H1>Holiday time!</H1>
      </FontGrow>
    </div>
  )
}
