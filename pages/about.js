import styles from "../styles/About.module.scss";

const Brackets = ({ children }) => {
    const lbr =  `{`
    const rbr =   `}`
    return(
    <>
        {lbr}
            <br/>
            <div style={{marginLeft:"1rem"}}>
                {children}
            </div>
        {rbr}
        <br/>
    </>
    )
}

const NeutralRes = () => {    
    return(
    <Brackets>
        <span className={styles.red}>&quot;probability&quot;</span>:&nbsp;
            <Brackets>
                <span className={styles.blue}>&quot;neg&quot;</span>: 0.311,<br/>
                <span className={styles.blue}>&quot;neutral&quot;</span>: 0.849,<br/>
                <span className={styles.blue}>&quot;pos&quot;</span>: 0.689<br/>
            </Brackets>
        <span className={styles.red}>&quot;label&quot;</span>: 
        <span className={styles.green}>&quot;neutral&quot;</span>
    </Brackets>
    )
}

const ConfusedRes = () => {
    return(
        <Brackets>
            <span className={styles.blue}>&quot;neg&quot;</span>: 0.501,<br/>
            <span className={styles.blue}>&quot;neutral&quot;</span>: 0.614,<br/>
            <span className={styles.blue}>&quot;pos&quot;</span>: 0.499<br/>
        </Brackets>
    )
}
   

const about = () => {
    return(
    <div className={styles.about}>
        <div className={styles.text}>
        <p className="block">
            This text editor is a gradient tool that analyzes text and generates a gradient based on its mood.
            Each paragraph is processed by a free and open&nbsp; 
            <a href="http://text-processing.com/docs/sentiment.html" target="_blank" rel="noreferrer">natural language processing API</a>.
            If you offer it some text like this: 
            </p>
        <blockquote> 
            A year before I saw that girl was when the Beatles first became wildly popular. By April of 1964, they’d captured the top five spots on the American singles charts. Pop music had never seen anything like it.
        </blockquote>
        <p>It returns a response like so:</p>
            <code>
                <pre>
                   <NeutralRes/>
                </pre>
            </code>
       <p className="block">
           Each probability score predicts if the text has a negative, neutral, or positive mood from 0 - 1. 
           For the negative property, this text has a 0.62, or about a 62% chance of being negative.
        </p> 
        <p>
            To turn this into a gradient, I coverted the sentiment to a color.
        </p>
    <p className="block">
        The rgb color scheme displays color in the order red, green, and blue with scores of 0-255 each (ex.,&nbsp;  
        <code>rgb(255, 255, 0)</code>&nbsp; for yellow). Because sentiments are always three ordered scores between 0 and 1, I converted to them rgb color scheme by multiplying each by 255.  
    </p>
    <p className="block">
        The score from the text above is converted to <code>rgb(79, 217, 176)</code>, or&nbsp;&nbsp; 
        <span className={styles.color}>
            <span className={styles.dot} style={{background:"#4FD9B0"}}></span> #4FD9B0.
        </span>
    </p>
    <p className="block">
        When the sentiment values are mapped onto the rgb scale, positive texts tend to be more&nbsp;&nbsp;
        <span className={styles.color}>
            <span className={`${styles.dot} ${styles.dot_blue}`}></span> blue,
        </span>
        &nbsp;neutral texts are more&nbsp;&nbsp;
        <span className={styles.color}>
            <span className={`${styles.dot} ${styles.dot_green}`}></span> green,
        </span>
        &nbsp;and negative texts&nbsp;&nbsp;
        <span className={styles.color}>
            <span className={`${styles.dot} ${styles.dot_red}`}></span> red.
        </span>
        &nbsp; But there is a lot of variation, especially from sentences that are hard to parse.</p>
    <p>
        For instance, this sentence returns fairly high probabilities for negative, positive, and neutral moods: 
    </p>
    <blockquote>
        For me, the major event of the following year, 1965, wasn’t President Johnson ordering the bombing of North Vietnam and the escalation of the war, or the discovery of a new species of wildcat on the island of Iriomote, but the fact that I acquired a girlfriend.
    </blockquote>
            <code>
                <pre>
                   <ConfusedRes/>
                </pre>
            </code>
    <p className="block">
       This is converted to <code>rgb(128, 56, 127)</code> or &nbsp;&nbsp;<span className={styles.dot} style={{background:"#80387F"}}></span>#80387F.
    </p>
    <p className="block">
        The final step is figuring out how prominent each color should be in the gradient. Each paragraph is compared for length against the other paragraphs. A paragraph that takes up half the words on a page will have its color represented in 50% of the gradient. An example gradient might be:
    </p>
    <p className="block">
        <code>
        linear-gradient(#fff 0%, #4926b6 39%, #742f8b 59%, #4639b9 95%);
        </code>
    </p>
    <p className="block">
        The example texts are from the short story <a href="https://www.newyorker.com/magazine/2020/02/17/with-the-beatles" target="_blank" rel="noreferrer">With the Beatles</a> by Haruki Murakami. 
    </p>
    </div>    
    </div>
    )}

export default about;
