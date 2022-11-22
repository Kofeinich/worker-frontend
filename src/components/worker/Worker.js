import React, {useEffect, useState} from "react"
import styled from "styled-components";

const StyledWorker = styled.div`{
  width: 200px;
  height: 400px;
  background: darkorange;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
}`

export const Worker = ({data}) => {
    const [workerData, setWorkerData] = useState({
        id: {
            _text: '',
        },
        name: {
            _text: '',
        },
        salary: {
            _text: '',
        },
        status: {
            _text: '',
        },
        organization: {
            fullName: {
                _text: '',
            },
            type: {
                _text: '',
            },
        }
    })
    useEffect(() => {
        setWorkerData(data)

    }, [])

    return <StyledWorker>
        <h2>Name: {workerData.name._text}</h2>
    </StyledWorker>
}
