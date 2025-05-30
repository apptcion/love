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
                        <p className={styles.line}>시험기간이다아 효림아 힘내ㅎㅎ</p>
                        <p className={styles.line}>너가 매일매일 내 생각에 있었는데</p>
                        <p className={styles.line}>요즘은 꿈에서도 나오려고 해</p>
                        <p className={styles.line}>너가 없는 시간이 너무 길어! 사랑해</p>
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
