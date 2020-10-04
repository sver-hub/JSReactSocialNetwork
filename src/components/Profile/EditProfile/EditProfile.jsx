import React, {useContext, useEffect, useState} from "react";
import style from './EditProfile.module.css'
import {FloatingWrapper} from "../../FloatingWrapper/FloatingWrapper";
import {useHttp} from "../../../hooks/http.hook";
import {AuthContext} from "../../../context/AuthContext";

export const EditProfile = () => {
    const [form, setForm] = useState({})
    const {loading, error, request, clearError} = useHttp()
    const auth = useContext(AuthContext)

    useEffect(() => {
        const getUserData = async () => {
            try {
                const userData = await request(`/api/profile/get/${auth.userId}`)
                setForm(...userData)
            } catch (e) {}

        }
        getUserData()
    }, [request, auth.userId])

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const saveHandler = async () => {
        try {
            const data = await request(`/api/profile/edit/${auth.userId}`, 'POST', {...form})
        } catch (e) {}

    }

    return (
        <FloatingWrapper>
            <div className={style.wrapper}>
                <form className={style.form} action="" autoComplete={'off'}>
                    <div className={style.formitem}>
                        <label className={style.label}>Profile Picture</label>
                        <input className={style.input} name={'imgUrl'} type="text"
                               onChange={changeHandler} value={form.imgUrl}/>
                    </div>
                    <div className={style.formitem}>
                        <label className={style.label}>Name</label>
                        <input className={style.input} name={'name'} type="text"
                               onChange={changeHandler} value={form.name}/>
                    </div>
                    <div className={style.formitem}>
                        <label className={style.label}>Surname</label>
                        <input className={style.input} name={'surname'} type="text"
                               onChange={changeHandler} value={form.surname}/>
                    </div>
                    <div className={style.formitem}>
                        <label className={style.label}>Status</label>
                        <input className={style.input} name={'status'} type="text"
                               onChange={changeHandler} value={form.status}/>
                    </div>
                    <div className={style.formitem}>
                        <label className={style.label}>Location</label>
                        <input className={style.input} name={'location'} type="text"
                               onChange={changeHandler} value={form.location}/>
                    </div>
                    <div className={style.formitem}>
                        <label className={style.label}>Date of Birth</label>
                        <input className={style.input} name={'dateOfBirth'} type="text"
                               onChange={changeHandler} value={form.dateOfBirth}/>
                    </div>
                    <div className={style.buttonwrapper}>
                        <button className={style.button} type={'submit'}>Save</button>
                    </div>
                </form>
            </div>
        </FloatingWrapper>
    )
}