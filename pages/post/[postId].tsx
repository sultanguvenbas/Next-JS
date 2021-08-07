import Router, {useRouter} from "next/router";
import axios from "axios";
import CreateCommentComponent from "../../component/createCommentComponent";
import React, {useEffect, useState} from "react";
import Head from "next/head";
import NavbarComponent from "../../component/navbarComponent";


let content =''
export default function PostId() {
    let router = useRouter();
    let [createComment, setCreateComment] = useState(false);
    let postId = router.query.postId;
    let [allpost, setData] = useState(false as any);


    useEffect(() => {
        if (postId) (async () => {
            let result = await axios.get("http://localhost:8080/user/getPosts/" + postId)
            setData(result.data);
        })()
    }, [postId])


    const show2 = () => {
        console.log(createComment)
        setCreateComment(!createComment);
    }


    return (
        <>
            <div className="flex flex-col h-full ">
                <div>
                    <Head>
                        <title>Vibrainly</title>
                        <link rel='icon' href='/favicon.ico'/>
                    </Head>
                </div>

                <NavbarComponent/>
                <div className="bg-black h-full flex flex-col items-center flex-grow text-white">
                    {!allpost ?? <h1>LOADING POST</h1>}
                    {allpost &&
                    <div key={allpost.Postid} className="bg-pink-500 mt-4  outline-none rounded-xl flex flex-col w-96">
                        <p className="bottom-1/2">
                            {allpost.Nickname}
                        </p>
                        <p className="text-sm">
                            {allpost.DateCreate}
                        </p>

                        <div className="h-full">
                            {allpost.Content}
                        </div>

                        <div className="flex flex-row justify-around ">
                            <a href="#" className={"inline-flex"}>
                                <svg viewBox="0 0 24 24"
                                     xmlns='http://www.w3.org/2000/svg'
                                     className="fill-current text-black h-8 w-8 ">
                                    <path fill="#a8129e"
                                          d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"/>
                                </svg>
                                <span>0</span>
                            </a>
                            <a href="#" className={"inline-flex"}>
                                <svg viewBox="0 0 24 24"
                                     xmlns='http://www.w3.org/2000/svg'
                                     className="fill-current text-black h-8 w-8 ">
                                    <path fill="#a8129e"
                                          d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"/>
                                </svg>
                                <span>0</span>
                            </a>
                            <a href="#" className={"inline-flex"} onClick={show2}>
                                <svg viewBox="0 0 24 24"
                                     xmlns='http://www.w3.org/2000/svg'
                                     className="fill-current text-black h-8 w-8">
                                    <path fill="#a8129e"
                                          d="M13.021,6.589c-1.186-0.035-1.988,0.579-2.41,1.841c0.217-0.083,0.427-0.124,0.631-0.124c0.434,0,0.625,0.225,0.573,0.672c-0.025,0.272-0.216,0.667-0.573,1.187c-0.356,0.519-0.625,0.779-0.803,0.779c-0.23,0-0.44-0.401-0.631-1.204C9.745,9.505,9.63,8.902,9.465,7.935C9.312,7.038,8.903,6.619,8.241,6.678C7.96,6.702,7.54,6.938,6.979,7.386C6.571,7.729,6.156,8.071,5.735,8.413l0.402,0.478C6.52,8.643,6.743,8.519,6.807,8.519c0.293,0,0.567,0.425,0.822,1.275c0.23,0.779,0.459,1.558,0.688,2.337c0.345,0.851,0.765,1.274,1.263,1.274c0.803,0,1.785-0.695,2.945-2.088c1.122-1.334,1.702-2.385,1.74-3.152C14.315,7.138,13.902,6.613,13.021,6.589 M10,0.625c-5.178,0-9.375,4.197-9.375,9.375S4.822,19.375,10,19.375s9.375-4.197,9.375-9.375S15.178,0.625,10,0.625 M10,18.523c-4.707,0-8.522-3.816-8.522-8.523c0-4.707,3.815-8.522,8.522-8.522S18.523,5.293,18.523,10C18.523,14.707,14.707,18.523,10,18.523"/>
                                </svg>
                                <span>0</span>
                            </a>
                        </div>
                        {createComment && <CreateCommentComponent
                            onchange={result =>(content = result)}
                            onClick={async ()=> {
                                let result = await axios.post("http://localhost:8080/user/comment",{
                                    content:content,
                                    postid:allpost.Postid
                                },{headers:{SultanToken:localStorage.getItem("token") }})
                                Router.push('/')
                            }}
                        />}
                    </div>}
                </div>
            </div>

        </>
    )
}