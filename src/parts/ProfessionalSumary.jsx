import React from 'react'

export const ProfessionalSumary = ({ data }) => {
    return (
        <div className='d-flex mt-3 border-bottom border-1  border-dark-subtle pb-3  '>
            <div className='title-box fw-bold fs-6'>
                Resumen Profesional
            </div>
            <div className='content-box fw-lighter px-3'>
                {data}
            </div>
        </div>
    )
}
