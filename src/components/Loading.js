import React from 'react'
import {TailSpin} from 'react-loader-spinner'

export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <TailSpin color="#00BFFF" height={80} width={80} />
    </div>
  )
}
