import styles from "@/styles/DropCardGrid.module.scss"
import DropCard from "../dropCard"

export default function DropCardGrid() {
    return(
        <div className={styles.dropCardGridWrapper}>
            <DropCard />
            <DropCard />
            <DropCard />
            <DropCard />
            <DropCard />
            <DropCard />
            <DropCard />
        </div>
    )
}