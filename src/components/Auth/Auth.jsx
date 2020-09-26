import React, {useState} from "react";
import style from "./Auth.module.css"
import {FloatingWrapper} from "../FloatingWrapper/FloatingWrapper";
import {useHttp} from "../../hooks/http.hook";

export const Auth = () => {
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({email: '', password: ''})

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
        clearError()
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})

        } catch (e) {
        } finally {
            setForm({email: '', password: ''})
        }
    }

    return (
        <FloatingWrapper>
            <div className={style.wrapper}>
                <h1 className={style.header}>Login</h1>
                <form action="" className={style.form} autoComplete={'off'}>
                    <span className={`${style.error} ${error ? '' : style.errorHidden}`}>{error ?? ''}</span>
                    <div className={style.formItem}>
                        <input type="text" value={form.email} className={style.input} name={'email'} required={true}
                               onChange={changeHandler}/>
                        <label className={style.label}>
                            <span className={style.labelContent}>Email</span>
                        </label>
                    </div>
                    <div className={style.formItem}>
                        <input type="password" value={form.password} name={'password'} className={style.input}
                               required={true} onChange={changeHandler}/>
                        <label className={style.label}>
                            <span className={style.labelContent}>Password</span>
                        </label>
                    </div>
                    <button className={style.button} onClick={loginHandler} disabled={loading}>Login</button>
                </form>
            </div>
        </FloatingWrapper>
    )
}
