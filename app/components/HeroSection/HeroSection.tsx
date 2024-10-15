import style from "./heroSection.module.css";

const HeroSection = () =>{
    return(
        <div className={style.hero}>
            <h1 className={style.heading}>HERO SECTION</h1>
            <p className={style.para}>"Innovating the Future, One Code at a Time."</p>
        </div>
    )
}
export default HeroSection