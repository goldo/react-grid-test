import React from 'react'

const Error = ({ error }) => {
  if (!error) return null

  return (
    <div>
      <p>
        <strong>Error :(</strong>
      </p>
      {error.message && <code>{error.message}</code>}
    </div>
  )
}
export default Error
