import React from "react";
import { useHistory, useParams } from 'react-router-dom'

const Rank = () => {
    const { id } = useParams()

    return (
        <div className={'Rank'}>
            <h1>Rank Screen</h1>
            <h1>Project ID: {id}</h1>
        </div>
    )
}

export default Rank