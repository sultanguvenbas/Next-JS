import React, {useEffect} from "react";
import SendInputComponent from "../../component/sendInputComponent";
import SendButtonComponent from "../../component/sendButtonComponent";
import {w3cwebsocket as W3CWebSocket} from "websocket";
import Head from "next/head";
import NavbarComponent from "../../component/navbarComponent";

let i = 1
let inputText = "";
const client = new W3CWebSocket("ws://localhost:8080/ws")

export default function Home() {
    let [array, setArray] = React.useState<any[]>([])
    client.onopen = () => {
        console.log("connected")
    }

    async function getData() {
        console.log("start")

        client.onmessage = (message) => {
            const today = new Date();
            const currentTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
            let newElement =
                <div key={i++} className="flex content-start justify-end">
                    <p className="bg-pink-700 text-right text-white rounded-xl m-2 p-3 align-bottom justify-end content-end flex
                    hover:bg-pink-700
                    outline-none
                    shadow
                    ">{message.data}</p>
                    <p className="text-sm text-right items-end flex">{currentTime}</p>
                </div>
            array.push(newElement)
            setArray([...array])
            console.log("dsadsdadasd", i)
            console.log(array)

        }

        // for (; ;) {
        //     let result = await axios.get("http://localhost:8080/rec")
        //     const today = new Date();
        //     const currentTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        //     console.log(result)
        //     let newElement =
        //         <div key={i++} className="flex content-start justify-end">
        //             <p className="bg-pink-700 text-right text-white rounded-xl m-2 p-3 align-bottom justify-end content-end flex
        //             hover:bg-pink-700
        //             outline-none
        //             shadow
        //             ">{result.data} </p>
        //             <p className="text-sm text-right items-end flex">{currentTime}</p>
        //         </div>
        //     array.push(newElement)
        //     setArray([...array])
        //     console.log("dsadsdadasd", i)
        //     console.log(array)
        //
        // }


    }

    useEffect(() => {
        getData()
    }, []) //this will  run only once


    return (
        <>
            <div className="flex flex-col h-screen">
                <div>
                    <Head>
                        <title>Vibrainly</title>
                        <link rel='icon' href='/favicon.ico'/>
                    </Head>
                </div>

                <NavbarComponent/>
                <div className="flex h-screen flex-col flex content-end justify-end">
                    <div className="m-auto justify-center outline-none rounded-xl
                 border-pink-800
                 flex flex-col justify-center h-96 w-96
                 overflow-auto overscroll-auto content-end  justify-end">
                        {array}
                    </div>

                    <div className="flex flex-row justify-center mb-28 mt-5 ">
                        <SendInputComponent onChange={result => inputText = result}/>
                        <SendButtonComponent onClick={async () => {
                            // await axios.get("http://localhost:8080/send/"+inputText)
                            client.send(inputText)
                        }}/>
                    </div>

                </div>
            </div>
        </>
    )
}