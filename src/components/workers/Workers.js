import React, {useEffect, useState} from "react"
import {getListOfWorkers} from "../../api/profile/requests";
import styled from "styled-components";
import {Worker} from "../worker/Worker";

const StyledWorkers = styled.div`{
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}`

export const Workers = () => {
    const [work, setWork] = useState([])

    useEffect(() => {
        const f = async () => {
            let data = await getListOfWorkers(4, 1)
            data = JSON.parse(data).workers.worker
            if (!Array.isArray(data)) {
                data = [data]
            }
            setWork(data)
        }
        f()

    }, [])

    console.log(work)

    return <StyledWorkers>
        {(work !== undefined) ? work.map((item, index) =>
            <Worker data={item} key={index}/>
        ) : <></>}
    </StyledWorkers>
}
