import React, {useEffect, useState} from 'react';

import "./example.css"
import "./style.css"
import "./utils.css"
import {useNavigate, useParams} from "react-router-dom";
// import getApiAddress from "../../../utils/api";
// import {toast} from "react-toastify";

// import "react-ace"
// import "ace-builds/src-noconflict/mode-python";
// import "ace-builds/src-noconflict/snippets/python";
// import "ace-builds/src-noconflict/theme-tomorrow";
// import "ace-builds/src-noconflict/ext-language_tools";
import Markdown from "../../components/wraps/Markdown.jsx";

// import apiAxios from "../../../apiAxios";


// import defaultFile from 'src/build.json'

const SeeProblemPage = ({defaultInfo}) => {
    const [info, setInfo] = useState({langs: {}, examples: []});

    const {id} = useParams();

    // const navigate = useNavigate();
    //
    // const [lang, setLang] = useState(1);
    //
    // let editorCode;

    // useEffect(() => {
    //     apiAxios.get(getApiAddress() + `/api/teacher/problems/${id}`).then(
    //         (r) => {
    //             if (! r.data.langs) r.data.langs = {}
    //             if (! r.data.examples) r.data.examples = []
    //
    //             console.log(r.data)
    //
    //             setInfo(r.data)
    //         }
    //     )
    // }, []);

    useEffect(() => {


        setInfo(defaultInfo)

    }, []);

    // useEffect(() => {
    //     if (info.langs.length > 0) {
    //         setLang(info.langs[0])
    //     }
    //     console.log(info.langs)
    // }, [info]);
    //

    console.log(info)

    return <>
        {/*<PageTitle title={`Задача id=` + id }/>*/}

        <div className="p-3 mb-4 bg-danger theme-text-light rounded-3 text-center">
            Просмотр в режиме учителя
        </div>

        <div className="row align-items-md-stretch" style={{rowGap: "1em"}}>
            <div className="col-md-6">
                <div className="h-60 p-3 theme-bg-light rounded-3">
                    <h2 style={{"color": "#6c757d;"}}>Задача id={id}</h2>
                    <h3>{info.name}</h3>
                </div>
            </div>
            <div className="col-md-6">
                <div className="h-100 p-3 theme-bg-light rounded-3">
                    <h2>Ограничения</h2>
                    <p style={{"white-space": "pre-line"}}>
                        Время выполнения: 1000мс
                        Память: 256мб
                    </p>
                </div>
            </div>
        </div>

        <p></p>

        <div className=" mb-4 theme-bg-light rounded-3">
            <div className="container-fluid py-5">
                <div className="col-md-12 fs-4">
                    <h4>Задача</h4>
                    <Markdown text={info.description}/>
                    <h4>Входные данные</h4>
                    <Markdown text={info.in_data || info.in}/>
                    <h4>Выходные данные</h4>
                    <Markdown text={info.out_data || info.out}/>
                </div>


            </div>
        </div>

        <div className="jumbotron theme-bg-light">
            <h2>Примеры</h2>

            {
                info.examples.map((data, index) => {
                    const [input_data, output_data] = data

                    const example_id = `example_${index}`

                    const copyFunction = () => {
                        const copyText = document.getElementById(example_id);

                        // toast.success('Успешно скопировано');

                        console.log(copyText)
                        navigator.clipboard.writeText(copyText.innerText);
                    }

                    return (
                        <div className="example" key={example_id}>
                            <div className="width-wrap">
                                <h6 className="m-1 width-inner">Входные данные</h6>
                                <button className="copy-btn" onClick={copyFunction}>Скопировать</button>
                            </div>

                            <p className=" m-0 console" id={example_id}>{input_data}</p>
                            <h6 className="m-1">Выходные данные</h6>
                            <p className="m-0 console">{output_data}</p>

                        </div>
                    )
                })
            }
        </div>

        <div className="p-3 mb-4 bg-danger theme-text-light rounded-3 text-center opacity-50">
            Отправка недоступна в этом режиме
        </div>

    </>;
};

export default SeeProblemPage;