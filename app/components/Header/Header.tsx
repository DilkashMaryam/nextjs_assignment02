import Link from "next/link";
import style from "./header.module.css";

const Header = () =>{
    return(
        <div className={style.head}>
            <h1 className={style.logo}>LOGO</h1>
            <h2 className={style.menu}> 
                <ul>
                <li><Link href="HomePage">Home</Link></li>
                <li><Link href="About">About</Link></li>
                <li><Link href="Contact">Contact</Link></li>
                <li><Link href="Services">Services</Link></li>
                </ul>
            </h2>
        </div>
    )
}
export default Header