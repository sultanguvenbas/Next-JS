import Link from 'next/link';
import Router, {useRouter} from "next/router";


export default function NavbarComponent() {
    let router = useRouter()


    return (
        <nav className="flex items-center  justify-between flex-wrap bg-pink-300 p-3">
            <Link href='/'>
                <a className={"inline-flex  rounded-xl items-center justify-center p-2 mr-4 group border-indigo-900 hover:shadow-lg hover:border-pink-800 " + (router.pathname == "/" ? "shadow-lg border-pink-800" : "")}>
                    <svg viewBox="0 0 20 20"
                         xmlns='http://www.w3.org/2000/svg'
                         className="fill-current text-black h-10 w-10 mr-2">
                        <path fill="#a8129e"
                              d="M15.77,3.488c-2.266-0.067-3.801,1.105-4.605,3.519c0.415-0.158,0.817-0.237,1.206-0.237c0.829,0,1.193,0.428,1.097,1.284c-0.049,0.52-0.414,1.275-1.097,2.268c-0.682,0.993-1.192,1.489-1.534,1.489c-0.439,0-0.841-0.767-1.206-2.3C9.508,9.06,9.288,7.909,8.972,6.06C8.679,4.346,7.899,3.545,6.633,3.658c-0.537,0.045-1.34,0.496-2.412,1.354c-0.78,0.654-1.572,1.308-2.375,1.962l0.767,0.914c0.73-0.474,1.157-0.711,1.279-0.711c0.56,0,1.084,0.812,1.571,2.436c0.439,1.489,0.878,2.979,1.316,4.468c0.658,1.624,1.462,2.436,2.412,2.436c1.535,0,3.412-1.33,5.628-3.992c2.144-2.549,3.253-4.557,3.326-6.023C18.242,4.537,17.451,3.534,15.77,3.488"/>
                    </svg>
                    <span className="text-xl hidden md:block text-black font-sans font-bold uppercase
                     tracking-wide">
                        Home
                    </span>
                </a>
            </Link>

            <Link href="group">
                <a className={"inline-flex  rounded-xl items-center justify-center p-2 mr-4 group border-indigo-900 hover:shadow-lg hover:border-pink-800 " + (router.pathname == "/group" ? "shadow-lg border-pink-800" : "")}>

                    <svg viewBox="0 0 24 24"
                         xmlns='http://www.w3.org/2000/svg'
                         className="fill-current text-black h-8 w-8 mr-2">
                        <path fill="#a8129e"
                              d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"/>
                    </svg>
                    <span className="text-xl hidden md:block text-black font-sans font-bold uppercase tracking-wide">
                        group
                    </span>
                </a>
            </Link>

            <Link href="/chat">
                <a className={"inline-flex  rounded-xl items-center justify-center p-2 mr-4 group border-indigo-900 hover:shadow-lg hover:border-pink-800 " + (router.pathname == "/chat" ? "shadow-lg border-pink-800" : "")}>

                    <svg viewBox="0 0 24 24"
                         xmlns='http://www.w3.org/2000/svg'
                         className="fill-current text-black h-8 w-8 mr-2">
                        <path fill="#a8129e"
                              d="M17.211,3.39H2.788c-0.22,0-0.4,0.18-0.4,0.4v9.614c0,0.221,0.181,0.402,0.4,0.402h3.206v2.402c0,0.363,0.429,0.533,0.683,0.285l2.72-2.688h7.814c0.221,0,0.401-0.182,0.401-0.402V3.79C17.612,3.569,17.432,3.39,17.211,3.39M16.811,13.004H9.232c-0.106,0-0.206,0.043-0.282,0.117L6.795,15.25v-1.846c0-0.219-0.18-0.4-0.401-0.4H3.189V4.19h13.622V13.004z"/>
                    </svg>
                    <span className="text-xl hidden md:block text-black font-sans font-bold uppercase tracking-wide">
                        chat
                    </span>
                </a>
            </Link>

            <Link href="#">
                <a className={"inline-flex  rounded-xl items-center justify-center p-2 mr-4 group border-indigo-900 hover:shadow-lg hover:border-pink-800 " + (router.pathname == "/#" ? "shadow-lg border-pink-800" : "")}>

                    <svg viewBox="0 0 24 24"
                         xmlns='http://www.w3.org/2000/svg'
                         className="fill-current text-black h-8 w-8 mr-2">
                        <path fill="#a8129e"
                              d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"/>
                    </svg>
                    <span className="text-xl hidden md:block text-black font-sans font-bold uppercase tracking-wide">
                        Contact us
                    </span>
                </a>
            </Link>

            {localStorage.getItem("token") && <Link href="#">
                <a className={"inline-flex  rounded-xl items-center justify-center p-2 mr-4 group border-indigo-900 hover:shadow-lg hover:border-pink-800 " +
                (router.pathname == "/#" ? "shadow-lg border-pink-800" : "")} onClick={e => {localStorage.clear(); Router.push('/')}}>

                    <svg viewBox="0 0 24 24"
                         xmlns='http://www.w3.org/2000/svg'
                         className="fill-current text-black h-8 w-8 mr-2">
                        <path fill="#a8129e"
                              d="M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10"/>
                    </svg>
                    <span className="text-xl hidden md:block text-black font-sans font-bold uppercase tracking-wide">
                        log out
                    </span>
                </a>
            </Link>}

        </nav>
    )
}