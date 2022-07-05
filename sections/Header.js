import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from "../styles/Home.module.scss";

const Header = ({gradient}) => {
    const router = useRouter();

    return (
    <header className={styles.header}>
        <div className={styles.header_top}>
            <h3 style={{marginBottom:"0.5rem"}}>With only a gradient tool</h3>
            {router.asPath === "/about" 
                ?  <Link href="/">Go back</Link> 
                :  <Link href="/about">How does this work?</Link> 
            }
        </div>
        <p>Current gradient: <code>{gradient}</code> </p>
    </header>);
}
 
export default Header;
