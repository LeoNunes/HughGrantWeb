import React from "react";
import { useFetchPoohQuery } from '../features/ebookDownloader/bookDownloadrSlice';
import './Text.css';

export default () => {
    const { data = "", isFetching } = useFetchPoohQuery();

    if (isFetching) {
        return (
            <div>
                <p>Downloading text</p>
            </div>
        );
    }

    const lines = data.split('\n');

    return (
        <div>
            {lines.map(l => <pre>{l}</pre>)}
        </div>
    );
}
