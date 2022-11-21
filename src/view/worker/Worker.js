import React, {useEffect, useState} from "react"
import {observer} from "mobx-react-lite";
import WorkerStore from "../../store/profile"

export const Worker = observer(() => {
    const { workerInfo, resStatus } = WorkerStore;

    useEffect(() => {
        WorkerStore.getWorkerInfo().then(res => res)
    },[])

    return <main>
        <h1> Have a nice day!</h1>
    </main>
})