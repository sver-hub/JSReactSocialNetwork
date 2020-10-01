import React, {useContext, useEffect, useState} from "react";
import style from "./Auth.module.scss"
import {FloatingWrapper} from "../FloatingWrapper/FloatingWrapper";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";

export const Auth = () => {
    const auth = useContext(AuthContext)
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({email: '', password: ''})
    const [status, setStatus] = useState({status: '', message: ''})

    useEffect(() => {
        document.getElementById('statusbar').className = `${style.statusbar} ${status.status === 'error' ?
            style.error : status.status === 'success' ? style.success : style.statusbarHidden}`
    }, [status])

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
        clearError()
        setStatus({status: '', message: ''})
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {
            setStatus({status: 'error', message: error })
        } finally {
            setForm({email: '', password: ''})
        }
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            setStatus({status: 'success', message: data.message})
        } catch (e) {
            setStatus({status: 'error', message: error})
        }
    }

    return (
        <FloatingWrapper>
            <div className={style.wrapper}>
                <h1 className={style.header}>Login</h1>
                <form action="" className={style.form} autoComplete={'off'}>
                    <span id={'statusbar'}>{status.status === 'error' ? error : status.message}</span>
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
                    <div className={style.buttonWrapper}>
                        <button className={`${style.button} ${style.login}`} onClick={loginHandler} disabled={loading}>Login</button>
                        <button className={`${style.button} ${style.register}`} onClick={registerHandler} disabled={loading}>Register</button>
                    </div>
                </form>
            </div>
        </FloatingWrapper>
    )
}
