import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category: any) => {
    let data: number[] = []
    const [state, setState] = useState({
        data: data,
        loading: true
    });

    useEffect( () => {
        getGifs(category).then(imgs => {
            setTimeout(() => {
                setState({
                    data: imgs, 
                    loading: false
                })
            }, 0);
        });
    }, [])

    // setTimeout(() => {
    //     setState({
    //         data: [1,2,3,3,12,3],
    //         loading: false
    //     })
    // }, 3000);

    return state
}