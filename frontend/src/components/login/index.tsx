import styles from "@/styles/Login.module.scss"
import Link from "next/link"

export default function Login () {
    return(
        <div className={styles.loginWrapper}>
            <div className={styles.oldUserLoginFormWrapper}>
                <div className={styles.inputWrapper}>
                    <span>CPF</span>
                    <input placeholder="Digite seu CPF"></input>
                </div>

                <div className={styles.inputWrapper}>
                    <span>Matrícula de sócio</span>
                    <input placeholder="Digite aqui sua matrícula"></input>
                </div>

                <Link href="/myDrops" className={styles.link}>
                    <button>Entrar</button>
                </Link>
            </div>

            <div className={styles.newUserLoginFormWrapper}>
                <h2>Primeiro acesso?</h2>
                <h3>Digite seu CPF e confira os drops disponíveis para você</h3>
                
                <div className={styles.inputWrapper}>
                    <span>CPF</span>
                    <input placeholder="Digite seu CPF"></input>
                </div>

                <Link href="/myDrops" className={styles.link}>
                    <button id={styles.seeDropsBtn}>Ver drops</button>
                </Link>
            </div>
        </div>
    )
}