import React from "react"
import style from "./relogio.module.scss"

interface IRelogioProps {
    time: number | undefined;
}

export default function Relogio({time = 0} : IRelogioProps) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteDez, minuteUn] = minutes.toString().padStart(2, '0'); // padStart é uma funcao que recebe o tamanho da string e o que vai preencher a string caso ela nao tenha o tamanho especificado
    const [secondDez, secondUn] = seconds.toString().padStart(2, '0'); // padStart é uma funcao que recebe o tamanho da string e o que vai preencher a string caso ela nao tenha o tamanho especificado
    return (
        //   serve para agrupar elementos sem precisar de uma div
        <> 
        <span className={style.relogioNumero}>{minuteDez}</span>
        <span className={style.relogioNumero}>{minuteUn}</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{secondDez}</span>
        <span className={style.relogioNumero}>{secondUn}</span>
        </>
    )
}