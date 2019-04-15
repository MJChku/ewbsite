import { Editor, Midi, Notation } from 'react-abc';
import React from "react";

const notation = 'CDEF GABc|';

const id = 'a-random-id';

const ABCEditor =  ({ notation}) => (
    <div>
    <textarea
        defaultValue={notation}
        id={id}
    />
        {/*<Editor*/}
        {/*    editArea={id}*/}
        {/*/>*/}

    </div>
);

const ABCMidi = ({ notation}) => <Midi notation={notation} />;

const ABCNotation = ({  notation}) => <Notation style = {{ background: 'pink' }}notation={notation} />;

export {ABCEditor,ABCMidi,ABCNotation}