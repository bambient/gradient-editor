import { useEffect } from "react";
import { convertToRaw } from "draft-js";
import usePageStore from "../stores/usePageStore";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

export default function useBlocks() {

useEffect(() => {
    usePageStore.setState({currentPage: uuidv4()});
    return () => {
        usePageStore.setState({currentPage: null});
    }
}, []);


const getSentiment = async (text) => {
    if(!text || text.split(" ").length < 3) {
        return null;
    }
    //console.log(text.split(" ").length);
    return axios.post('/api', { text })
        .then(res => {        
            const { neg, neutral, pos } = res.data.probability;         
            const rgb = [neg, neutral, pos].map(el => Math.round(el * 255));
                    
            let hex = '#' + rgb.map(x => {
                    const hexVal = x.toString(16)
                    return (hexVal.length === 1) ? '0' + hexVal : hexVal }).join('');
            return hex;
    })
}

const handleSubmit = async (editorState) => { 
    const content = editorState.getCurrentContent();
    const plainText = content.getPlainText();
    const { blocks } = convertToRaw(content);

    if(!plainText){
        console.log("Error: Empty note!")
    }
    usePageStore.setState({ wordCount: plainText.length });

    const getBlocks = async () => {
        const promises = await Promise.all(blocks.map(async (block, i) => {
            const color = await getSentiment(block.text);    //   :block/sentiment
            
            const newBlock = { 
                id:block.key,                                     //   :block/id   
                page: usePageStore.getState().currentPage,        //   :block/page
                content:blocks[i],                                //   :block/content 
                order: i,                                         //   :block/order
                wordCount: block.text.length,                     //   :block/word-count
                color
                };
            return newBlock;
        }))
            
       usePageStore.setState({ blocks: promises });
    }
    getBlocks();
}

    return {
        handleSubmit
    }
}

