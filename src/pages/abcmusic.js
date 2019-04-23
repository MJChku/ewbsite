import React from 'react'
import Layout from '../components/Layout'
import {ABCEditor, ABCMidi, ABCNotation} from "../components/ABCmusic";
import {editorProps} from "../components/ABCprops";
import notation from '../components/ABCdata';

const id = 'react-abc-editor-id';


export default class ABCcomposer extends React.Component {

    state = {
        value: notation
    }


    handleChange = (event) => {
        this.setState({value: event.target.value})
    }
    render() {
        return (
            <>
                <div style={{background:'white'}}>
                <textarea
                    cols="50"
                    defaultValue={notation}
                    id={id}
                    rows="20"
                    onChange={this.handleChange}
                />
                <div id="midi"/>
                {/*<ABCEditor*/}
                {/*    editArea={id}*/}
                {/*    editorParams={{*/}
                {/*        ...editorProps.editorParams,*/}
                {/*        generate_midi: true,*/}
                {/*        midi_id: 'midi',*/}
                {/*    }}*/}
                {/*/>*/}
                    <div>
                        <ABCNotation notation={this.state.value} />
                    </div>
                    <div>
                        <ABCMidi notation={this.state.value} />
                    </div>


                </div>
            </>

        );
    }
}

