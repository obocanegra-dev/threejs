import React from 'react'
import {SketchPicker} from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#FFFFFF", // White
          "#151515", // Black
          "#EBCD8B", // Beige
          "#BBB1D2", // Lavender
          "#A4CEF8", // Baby Blue
          "#9D6333", // Khaki
          "#E29891", // Flamingo
          "#CC9D93", // Mushroom
          "#CCF5C9", // Jade
          "#FFD5DB", // Light Pink
          "#2D314A", // Navy Blue
          "#CF8F26"  // Mustard Yellow
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker