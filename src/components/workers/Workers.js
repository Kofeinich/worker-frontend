import React, {useEffect, useState} from "react"
import {getListOfWorkers} from "../../api/profile/requests";

export const Workers = () => {
    const [workers, setWorkers] = useState([])

    useEffect(() => {
        const f = async () => {
            let data = await getListOfWorkers(4, 1)

            setWorkers(JSON.parse(data).workers.worker)
        }
        f()

    }, [])



    return <></>
}
