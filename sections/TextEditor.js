import {getDefaultKeyBinding, KeyBindingUtil} from 'draft-js';
import { useEffect } from 'react';
import { Editor } from "draft-js";
import { useStyleStore, useEditorStore } from "../stores/useEditorStore";
import useBlocks from "../utils/useBlocks";
import { VscRefresh } from "react-icons/vsc";
import styles from "../styles/Home.module.scss";

const TextEditor = () => {
    const { editorState } = useEditorStore();
    const { title, blockStyleFn} = useStyleStore();
    const { handleSubmit } = useBlocks();
  
    const prepareText = () => {
        console.log("prepare");
        handleSubmit(editorState);
    }

    useEffect(() => {
        prepareText();
    }, [])


    return(
        <form className={styles.editor} 
            onSubmit={(e) => { 
                e.preventDefault()
                prepareText()}}>
            <div style={{display:"flex",gap:"1.5rem",marginBottom:"1.5rem"}}>
            <input className="title" value={title} readOnly/>
            <button type="submit">
                <VscRefresh/>
            </button>
            </div>
              <Editor editorKey="editor"
                  editorState={useEditorStore.getState().editorState}
                  onChange={(ed) => {
                    useEditorStore.setState({editorState: ed})
                    }}
                  handleReturn={() => prepareText()}
                  handlePastedText={() => prepareText()}
                  onBlur={() =>  prepareText()}
                  keyBindingFn={(e) => {
                    if(e.key == " ") {
                        prepareText();
                    }
                    return getDefaultKeyBinding(e);
                  }}
                  blockStyleFn={blockStyleFn}
                  />
        </form>
    )
}
  
export default TextEditor;