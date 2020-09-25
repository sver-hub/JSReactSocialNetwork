import React from "react";
import style from "./Auth.module.css"
import {FloatingWrapper} from "../FloatingWrapper/FloatingWrapper";

export const Auth = () => {

    return (
        <FloatingWrapper>
            <div className={style.wrapper}>
                <h1 className={style.header}>Login</h1>
                <form action="" className={style.form} autoComplete={'off'}>
                    <div className={style.formItem}>
                        <input type="text" className={style.input} name={'email'} required={true} />
                        <label className={style.label}>
                            <span className={style.labelContent}>Email</span>
                        </label>
                    </div>
                    <div className={style.formItem}>
                        <input type="password" className={style.input} required={true}/>
                        <label className={style.label}>
                            <span className={style.labelContent}>Password</span>
                        </label>
                    </div>
                    <button className={style.button}>Login</button>
                </form>
            </div>
        </FloatingWrapper>
    )
}
