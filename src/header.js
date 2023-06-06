import React from 'react'

const header = (props) => {
  return (
    <div>
Başlık

{props.content && props.content}
    </div>
  )
}

export default header