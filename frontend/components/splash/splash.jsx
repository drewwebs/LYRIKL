import React, { useEffect } from 'react';
import Charts from '../songs/charts_container';
import Featured from '../featured/featured';


export default () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>
        <Featured />
        <Charts />
    </>)
}