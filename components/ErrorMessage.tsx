// error message  component
import React, { PropsWithChildren } from 'react'

export default function ErrorMessage({ children }: PropsWithChildren) {
  return (
    <p className='text-red-500'>{children}</p>
  )
}
