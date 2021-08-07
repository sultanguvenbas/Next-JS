import Head from "next/head";
import NavbarComponent from "../component/navbarComponent";

export default function Group() {

    return(
        <>
            <div className="flex flex-col h-screen">
                <div>
                    <Head>
                        <title>Vibrainly</title>
                        <link rel='icon' href='/favicon.ico' />
                    </Head>
                </div>

                <NavbarComponent/>
                hello
            </div>
        </>

    )
}