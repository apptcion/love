'use client'
import { useEffect, useRef } from "react"
import styles from '../../styles/main.module.css'

export default function Main() {
    const open_btn = useRef(null);
    const close_btn = useRef(null);
    const envelop_top = useRef(null);
    const letter = useRef(null);

    useEffect(() => {
        if (open_btn.current && envelop_top.current) {
            open_btn.current.addEventListener('click', () => {
                envelop_top.current.classList.add(styles.open);
                envelop_top.current.classList.remove(styles.close);
                setTimeout(() => {
                    letter.current.classList.add(styles.open_letter)
                    letter.current.classList.remove(styles.close_letter)
                },300)
                

            });
        }

        if (close_btn.current && envelop_top.current) {
            close_btn.current.addEventListener('click', () => {
                
                letter.current.classList.remove(styles.open_letter)
                letter.current.classList.add(styles.close_letter)
            
                setTimeout(() => {
                    envelop_top.current.classList.remove(styles.open);
                    envelop_top.current.classList.add(styles.close);    
                },300)
            });
        }
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.letter_wrap}>
                <div className={styles.envelop_bg}></div>
                <div className={`${styles.envelop_top}`} ref={envelop_top}></div>
                <div className={styles.envelop}></div>
                <div className={styles.letter} ref={letter}>
                    <div className={styles.content}>
                        <p className={styles.to}>To. 효림</p>
                        <p className={styles.line}>효림아 나는 언제나 너가 밝고</p>
                        <p className={styles.line}>웃음이 가득했으면 좋겠어</p>
                        <p className={styles.line}>오늘 하루도 힘내 사랑해</p>
                    </div>
                </div>
            </div>
            <div className={styles.potato_wrap}>
                <img src="/sweet_potato.webp" className={styles.potato}></img>
            </div><div className={styles.btn_wrap}>
                <div className={styles.btn} ref={open_btn}>OPEN</div>
                <div className={styles.btn} ref={close_btn}>CLOSE</div>
            </div>
        </main>
    );
}
