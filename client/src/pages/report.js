import React from 'react'

function Report(props) {
  const { routeProp } = props

  const height = () => {
    return window.innerHeight - 100
  }
  const src = () => {
    const base = 'http://localhost:4000'
    return `${base}/${routeProp}/report`
  }
  return (
    <div style={{ width: "100%", height: height() }}>
      <iframe src={src()} title={routeProp} width="100%" height="100%">
        IFrame not supported
      </iframe>
    </div>
  )
}

export default Report
