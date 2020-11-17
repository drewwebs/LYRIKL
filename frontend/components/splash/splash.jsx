import React, { useEffect } from 'react';
import Charts from '../songs/charts';
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