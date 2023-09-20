import { useEffect, useState } from "react";
import { timeForSeconds } from "../../common/utils/time"
import Button from "../Button"
import { ITask } from "../types/tasks";
import Relogio from "./Relogio/index"
import style from "./cronometro.module.scss"

interface ICronometroProps {
    selected: ITask | undefined;
    handlerCompletedTask: () => void;
}

export default function Cronometro({ selected }: ICronometroProps ) {
    const [time, setTime] = useState<number>(); // useState é um hook que retorna um array com duas posições, a primeira é o valor da variavel e a segunda é uma funcao para alterar o valor da variavel
    useEffect(() => { // re-renderizar toda vez que a variavel selected mudar, useEffect é um hook que recebe uma funcao e executa toda vez que a variavel passada no array de dependencias mudar
        if (selected?.time) {
            setTime(timeForSeconds(selected.time));
        }
    }
    , [selected]); // array de dependencias, ou seja, as variaveis, como base para executar a funcao

    function regressiva(count: number = 0) { // funcao que recebe um valor padrao de 0
        // função recursiva que vai diminuindo o tempo
        // depois de 1s decrementa o tempo
        setTimeout(() => {
            if (count > 0) {
                setTime(count - 1); // setTime é uma funcao que altera o valor da variavel time
                regressiva(count - 1); // chama a funcao novamente
            }
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <h1 className={style.titulo}>Cronometro</h1>
            <div className={style.relogioWrapper}>
            <Relogio
            time={time}
            ></Relogio>
            </div>
            <Button
            onClick={() => regressiva(time)}
            >Start</Button>
        </div>
    )
}