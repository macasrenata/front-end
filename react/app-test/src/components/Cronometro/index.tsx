import { useState } from "react";
import { timeForSeconds } from "../../common/utils/time"
import Button from "../Button"
import { ITask } from "../types/tasks";
import Relogio from "./Relogio/index"
import style from "./cronometro.module.scss"

interface ICronometroProps {
    selected: ITask | undefined;
}

export default function Cronometro({ selected }: ICronometroProps ) {
    const [time, setTime] = useState<number>();
    if (selected?.time) {
        setTime(timeForSeconds(selected.time));
    }

    return (
        <div className={style.cronometro}>
            <h1 className={style.titulo}>Cronometro</h1>
            <div className={style.tempo}>
                {time}
            </div>
            <div className={style.relogioWrapper}>
            <Relogio></Relogio>
            </div>
            <Button>Start</Button>
        </div>
    )
}

// Path: react/app-test/src/components/Contador/index.ts