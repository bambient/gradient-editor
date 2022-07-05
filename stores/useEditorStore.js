const Draft = require('draft-js');
import { EditorState } from 'draft-js';
import { today } from "../utils/date";
import create from "zustand"; 

// INIT TEXT OF CARD 
const emptyContentState = Draft.convertFromRaw({
    entityMap: {}, 
    blocks: [
      {
        text: 'Hello! This explanatory text is totally editable. Delete it and type something else here.',
        key: '1p',
        type: 'unstyled',
        entityRanges: [],
      },
      {
        text: 'In 2020, someone I knew had a dream they could only describe things with only a gradient tool. In the dream, it was completely useless. But I wondered how this tool would work if it existed in real life.',
        key: '2p',
        type: 'unstyled',
        entityRanges: [],
      },
      {
        text: "This little text editor is a gradient tool that changes based on the sentiment of the text put inside it. Play around with it and enjoy exploring your gradient.",
        key: '3p',
        type: 'unstyled',
        entityRanges: [],
      }
    ],
  });

const editor = (set, get) => ({
    editorState: EditorState.createWithContent(emptyContentState)
});

const styles = (set, get) => ({
  title: today,
  blockStyleFn: (contentblock) => { return 'block' }
});

export const useEditorStore = create(editor);
export const useStyleStore = create(styles);
