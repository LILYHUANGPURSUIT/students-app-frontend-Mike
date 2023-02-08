import React from 'react';
import "./error.css"

function Error({error}) {
  return (
    <div className='error'>
        There was an error: {error}
        <br />
        Please refresh the page or contact support.
    </div>
  )
}

export default Error