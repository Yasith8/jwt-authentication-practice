import React from 'react'

function Log() {
  return (
    <div>
        <h1>Log In</h1>
        <form>
            <label for="username">Username: </label>
            <input type="text" id="username" name="username"></input><br />
        </form>
    </div>
  )
}

export default Log