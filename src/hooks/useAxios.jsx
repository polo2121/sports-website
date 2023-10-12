import React, { useEffect, useState } from 'react'
import axios from 'axios';


const sportApi = axios.create({
    baseURL: "https://api.ui.dev/hash-history-basketball-league",
    headers: {
        accept: "application/json",
    },
});

const useAxios = (path, method, body = "") => {

    const [fetchStatus, setFetchStatus] = useState("loading");
    const [response, setResponse] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        console.log(path, method)
        setFetchStatus("loading");
        sportApi.request({
            url: path,
            method: method.toUpperCase(),
            ...(body ? { body } : {}),
            responseType: "json",
            timeout: 50000,
            singal: controller.signal,
        }).then((res) => {
            console.log(JSON.parse(res.data.body))
            setResponse(JSON.parse(res.data.body))
            setFetchStatus("success")

        }).catch((e) => {
            console.log(e)
            setFetchStatus("error");
        }).finally(() => {
            controller.abort();
        })

        return () => {
            setFetchStatus("loading");
            controller.abort();
        }

    }, [path])

    return { fetchStatus, response }
}

export default useAxios