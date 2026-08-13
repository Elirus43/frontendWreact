
import styles from "./Tab.module.css";
import {useState} from "react";

export default function Tab({titles, children})
{
    const [activeTab, setActiveTab] = useState(0);
    return (<div>
        {
            titles.map((title, index) => <div className={styles['tab-header']}
                                              key={index}
                                            onClick = {() => setActiveTab(index)}>
                {title}
            </div>)
        }
        <div className={styles['tab-content']}>
            {
                children[activeTab]
            }
        </div>
    </div>)
}