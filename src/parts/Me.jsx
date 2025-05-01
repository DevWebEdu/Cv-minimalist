import React from 'react'

export const Me = ({ data }) => {
    const { name, lastname,degree,telf,email,age } = data
    return (
        <div className='  border-bottom border-1  border-dark-subtle'>
            <div className='d-flex flex-column  justify-content-center  align-items-center'>
                <h1 className='fs-3'>{name + " " + lastname}</h1>
                <h3 className='fs-5'>{degree}</h3>
                <div className='d-flex justify-content-center gap-3'>
                    <p className='fs-6  fw-lighter'>Telf: { telf }</p>
                    <p className='fs-6  fw-lighter'>Edad: { age } años</p>
                    <p className='fs-6 fw-lighter '>Email: { email }</p>
                </div>
            </div>
        </div>
    )
}
