import React from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import PropTypes from 'prop-types'
import './Editor.css'
require('codemirror/mode/javascript/javascript')
require('codemirror/mode/markdown/markdown')
require('codemirror/theme/material.css')

function Editor(props)  {
    const { value, mode, handleChange } = props;

    return (
        <CodeMirror
            value={value}
            options={{
                mode: mode,
                theme: 'material',
                lineNumbers: true,
            }}
            onChange={(e, d, v) => {handleChange(v)}}
        />
    )
}

Editor.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
}

export default Editor;
