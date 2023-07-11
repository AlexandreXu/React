import React, {useState} from "react";
import styles from "./Collapse.module.css";
import ArrowUp from "../../assets/icons/ArrowUp";
import ArrowDown from "../../assets/icons/ArrowDown";

const Collapse = ({item}) => {
    const [selected, setSelected] = useState(false);

    return (
        <div className={styles.item}>
            <div className={selected ? styles.titleSelected : styles.title}>
                <span>{item.title}</span>
                {selected
                    ? <ArrowDown onClick={() => setSelected(!selected)} />
                    : <ArrowUp onClick={() => setSelected(!selected)} />}
            </div>
            <div className={selected ? styles.contentShow : styles.content}>
                {Array.isArray(item.content)
                    ?  <ul> {item.content.map((text, index) => <li key={index} className={styles.equipment}>{text}</li>)} </ul>
                    :   item.content
                }
            </div>
        </div>
    )
}

export default Collapse;
