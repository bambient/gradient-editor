import { useState } from "react";
import usePageStore from "../stores/usePageStore";
import styles from "../styles/Home.module.scss"; 

const Gradient = ({ children, ...props }) => {  
    const blockListener = (data) => {
        const count = usePageStore.getState().wordCount;            // total word count
      
        const sizeArray = data.map(el => { 
            return {color: el.color, size: (el.wordCount / count) * 100}} ).filter(el => el.color);
        
        const startColor = {color: "#fff", size: 0};
        
        // convert to % out of 100%
        const percentArray = [startColor, ...sizeArray].map((el, i, arr) => {
            const reducer = (prev, curr) => { return { 
                color: curr.color, 
                size: Math.round(prev.size + curr.size) 
                }
            };

            const newArr = arr.slice(0, i + 1);
            return newArr.reduce(reducer);
        });
       
        const stringArr = (percentArray).map(vals => `${vals.color} ${vals.size}%`);

        props.setGradient(stringArr.join(', '));
    }
  

    usePageStore.subscribe(blockListener, state => state.blocks);
       
    return(
        <div className={styles.bg}
            style={{background: props.gradient ? `linear-gradient(${props.gradient})` : "#fff"}}>
                {children}
        </div>
    )
  }

  export default Gradient;