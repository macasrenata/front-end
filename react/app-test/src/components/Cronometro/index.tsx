import Button from "../button"
import Relogio from "./Relogio/index"
import style from "./cronometro.module.scss"

export default function Cronometro() {
    return (
        <div className={style.cronometro}>
            <h1 className={style.titulo}>Cronometro</h1>
            <div className={style.relogioWrapper}>
            <Relogio></Relogio>
            </div>
            <Button>Start</Button>
        </div>
    )
}

// Path: react/app-test/src/components/Contador/index.ts