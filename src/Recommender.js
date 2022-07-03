import React from 'react'
import ReactDOM from 'react-dom'
import { heapify, MaxHeap } from "mnemonist/heap";
import FixedDeque from "mnemonist/fixed-deque";
import logger from "./Logger";


function Recommender({k, items}) {
    var bottomHeap = new MaxHeap((x, y) => {
            if(x.priority < y.priority)
                return -1;
            else if(x.priority > y.priority)
                return 1;
            return 0;
        });
    items.forEach(item => bottomHeap.push(item));

    var topK = new FixedDeque(Array, k);
    for(var i = 0; i < Math.min(k, items.length); ++i)
        topK.push(bottomHeap.pop());

    // debugging
    logger.debug(`topK length: ${topK.size}`);
    logger.debug(`bottomHeap length: ${bottomHeap.size}`);

    var topKElements = [];
    topK.forEach(item => topKElements.push(
        <li>
            <span><strong>{item.value}</strong></span>
            <span>{item.priority}</span>
        </li>));

    var bottomHeapElements = [];
        bottomHeap.toArray().forEach(item => bottomHeapElements.push(
        <li>
            <span><strong>{item.value}</strong></span>
            <span>{item.priority}</span>
        </li>));

    return (
        <div>
            <h3>Top K Items</h3>
            <ul>
                {topKElements}
            </ul>
            <h3>Bottom Heap</h3>
            <ul>
                {bottomHeapElements}
            </ul>
        </div>
    );
}

export default Recommender;