import { useEffect, useState } from "react";

export default function Header() {
    const [menuLinksData, setMenuLinksData] = useState([]);

    useEffect(() => {
        const data = async () => {
            const result = await fetch(
                "https://rmvd3x7o0c.execute-api.us-east-2.amazonaws.com/Production/menulinks"
            );
            const json = await result.json();
            setMenuLinksData(json)
        };

        data();
    },[]);

    return (
        <header id="intro">
            <article className="fullheight">
                <div className="hgroup">
                    <h1>Landon Hotel</h1>
                    <h2>West London</h2>
                    <p>
                        <a href="#welcome">
                            <img
                                src="https://landonhotel.com/images/misc/arrow.png"
                                alt="down arrow"
                            />
                        </a>
                    </p>
                </div>
            </article>

            <nav id="nav">
                <div className="navbar">
                    <div className="brand">
                        <a href="#welcome">
                            Landon <span>Hotel</span>
                        </a>
                    </div>
                    <ul>
                        {menuLinksData.map((i) => (
                            <li key={i.class} className={i.class}>
                                <a href={i.href}>
                                    <span>{i.text}</span>
                                </a>
                            </li>
                        ))}{" "}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
