// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./theme.dark.css"

import SeeProblemPage from "./pages/SeeProblemPage/SeeProblemPage.jsx";
import {changeTheme} from "./theme.js";
import ChangeThemeButton from "./components/ChangeThemeButton.jsx";
import React, {useState} from "react";
import If from "./components/If.jsx";

function App() {
    // const [count, setCount] = useState(0)

    const [state, setState] = useState(0)


    const [info, setInfo] = useState({})


    function onSend() {
        setInfo(JSON.parse(usersFormText))
        setState(1)
    }


    let usersFormText = "";
    return (
        <div>

            <h1 className="p-3 mb-4 theme-bg-light rounded-3 text-center">
                CodeBattles Problems Viewer
            </h1>

            <div className="p-3 mb-4 bg-success theme-text-light rounded-3 text-center">
                Для просмотра задачи заново, перезагрузите страницу
            </div>

            <div className="p-3 mb-4 bg-success theme-text-light rounded-3 text-center">
                Смена темы


                <ChangeThemeButton/>
            </div>


            <If condition={state === 0}

                is_true={
                    <div className="row">
                        <div className="col-12">
                            <div className="jumbotron theme-bg-light  p-3">
                                <h4>Предпросмотр задачи</h4>
                                <form className="p-3">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Введите
                                            содержимое <b>build.json</b> сюда</label>
                                        <textarea className="form-control" name="users" id="exampleFormControlTextarea1"
                                                  onChange={(event) => usersFormText = event.target.value}
                                                  rows="10"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className="btn btn-success" onClick={onSend}>
                                            Предпросмотр
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                }

                is_false={
                    <SeeProblemPage defaultInfo={info}/>
                }

            />


        </div>
    )
}

export default App
