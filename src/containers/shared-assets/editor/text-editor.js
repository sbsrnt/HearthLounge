import React from 'react';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TextEditor = ({editorState, handleInputChange, selector}) => {

  const toolbar = {
    options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'link', 'embedded', 'image', 'history'],
    inline: {
      options: ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript']
    },
    blockType: {
      options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6']
    },
    fontSize: {
      options: [10, 11, 12, 14, 16, 18]
    },
    list: {
      options: ['unordered', 'ordered']
    }
  };

  return (
      <div className="mothership">
        <Editor editorState={editorState}
                onEditorStateChange={handleInputChange}
                toolbar={toolbar}
                placeholder="Your text goes here..."
                wrapperClassName="editor-wrapper"
                editorClassName="editor"
                toolbarClassName="toolbar"/>
        <textarea disabled
                  style={{visibility: 'hidden'}}
                  id={selector}
                  value={editorState && draftToHtml(convertToRaw(editorState.getCurrentContent()))}/>
      </div>

  );
};

export default TextEditor;