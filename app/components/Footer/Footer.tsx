import style from "./footer.module.css"

const Footer = () =>{
    return(
        <div className={style.foot}>
            <h1 className={style.heading}>Footer</h1>
            <ul className={style.menu}>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Social Media Links</a></li>
            </ul>
            <h2 className={style.cp}>Copyright information</h2>
        </div>
    )
}
export default Footer