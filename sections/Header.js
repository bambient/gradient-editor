import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from "../styles/Home.module.scss";

const Header = () => {
    const router = useRouter();

    return (
    <header className={styles.header}>
        <div>
            <h3>a text editor with a sentiment gradient</h3>
            <p>current gradient</p>
        </div>
        <div>
            {router.asPath === "/about" 
                ?  <Link href="/">Go back</Link> 
                :  <Link href="/about">How does this work?</Link> 
            }
        </div>
    </header>);
}
 
export default Header;
