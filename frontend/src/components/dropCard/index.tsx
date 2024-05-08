import styles from "@/styles/DropCard.module.scss"

export default function DropCard() {
    return(
        <div className={styles.dropCardWrapper}>
            <img src="/shirt.png"/>
            <h3>50% OFF na Camisa Oficial 2024</h3>
            <button>Resgatar drop</button>
        </div>
    )
}