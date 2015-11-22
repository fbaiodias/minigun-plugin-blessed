import React from 'react'

const logo =
`           _       _
 _ __ ___ (_)_ __ (_) __ _ _   _ _ __
| '_ \` _ \\| | '_ \\| |/ _\` | | | | '_ \\
| | | | | | | | | | | (_| | |_| | | | |
|_| |_| |_|_|_| |_|_|\\__, |\\__,_|_| |_|
                     |___/
`

export default (props) => {
  return (
    <box
      draggable
      style={{border: {fg: 'blue'}}}
      {...props}
    >
      {logo}
    </box>
  )
}
