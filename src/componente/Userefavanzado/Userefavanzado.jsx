import { useEffect, useRef } from 'react'

export const Userefavanzado = () => {
  const focusinputref = useRef(null)
  useEffect(() => {
    if (focusinputref.current) {
      focusinputref.current.focus()
    }
  }, [])
  return (
    <div>
      <form>
        <fieldset>
          <label htmlFor='user'>
            <input
              type='text'
              name='user'
              id='user'
              placeholder='user'
              ref={focusinputref}
            ></input>
          </label>
          <label htmlFor='password'>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='password'
            ></input>
          </label>
        </fieldset>
      </form>
    </div>
  )
}
