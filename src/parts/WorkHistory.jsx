import React from 'react'
import { Works } from '../component/Works'

export const WorkHistory = ({data}) => {
    const {work_1,work_2,work_3} = data

    const  trabajos = [
        work_1 ,
        work_2 , 
        work_3
    ]
    
    console.log(trabajos)
    return (
        <div className='d-flex mt-3 border-bottom border-1  border-dark-subtle pb-3  '>
            <div className='title-box fw-bold fs-6'>
                Vida Laboral
            </div>
            <div className='content-box fw-lighter px-3 d-flex flex-column gap-1'>
                {
                    trabajos.map( (trabajo,i) =>(
                        <Works data={trabajo}  key={i}/>
                    ) )
                }
            </div>
        </div>
    )
}
