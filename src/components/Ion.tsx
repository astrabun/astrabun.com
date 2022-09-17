import React from 'react'
declare global { namespace JSX { interface IntrinsicElements { "ion-icon": any; } } }

function Ion(props: {name: string, size?: string}) {
  return (
    <ion-icon name={props.name} size={props.size || "large"} />
  )
}

export default Ion