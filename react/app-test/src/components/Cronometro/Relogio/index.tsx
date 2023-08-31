import React from "react"
import style from "./relogio.module.scss"

export default function Relogio() {
    return (
        //   serve para agrupar elementos sem precisar de uma div
        <> 
        <span className={style.relogioNumero}>0</span>
        <span className={style.relogioNumero}>0</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>0</span>
        <span className={style.relogioNumero}>0</span>
        </>
    )
}