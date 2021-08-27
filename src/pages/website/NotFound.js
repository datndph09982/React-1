import React,{useEffect} from 'react'
import Website from '../../Layouts/website'

const NotFound = ({handleSetTitle}) => {
    useEffect(()=>{
        handleSetTitle('Not Found Page')
    })
    return (
        <div title="Not Found Page">
        </div>
    )
}

export default NotFound
