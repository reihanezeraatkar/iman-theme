import React, {useState} from 'react';
import { DataHits } from './DataHits';

export default function MainHits({hits}) {
    const [hit, setHit] =useState(0)
    const length = hits.length;
    if (!Array.isArray(hits) || hits.length <= 0) {
        return null
    }
    return (
        <>
             <ul className="news-hits">
              {DataHits.map((item, index) => {
                return (
                  <li key={index}>
                    <a  href={item.url}>
                      {item.title}
                    </a>
                  </li>
                )
              })}
            </ul>
        </>
    )
}
