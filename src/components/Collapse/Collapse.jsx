import React, {useState} from "react";
import styles from "./Collapse.module.css";
import ArrowUp from "../../assets/icons/ArrowUp";
import ArrowDown from "../../assets/icons/ArrowDown";
const Collapse = ({item}) => {

    const [selected, setSelected] = useState(false);

    return (
        <div className={styles.item} onClick={() => setSelected(!selected)}>
            <div className={selected ? styles.titleSelected : styles.title}>{item.title} {selected ? <ArrowDown/> : <ArrowUp/>}</div>
            <div className={selected ? styles.contentShow : styles.content}>
                {Array.isArray(item.content)
                    ?   item.content.map((text) => <p>{text}</p>)
                    :   item.content
                }
            </div>
        </div>
    )
}

export default Collapse;