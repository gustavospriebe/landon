import { useEffect, useState } from "react";

export default function Welcome() {
    const [galleryImg, setgalleryImg] = useState([]);

    useEffect(() => {
        const data = async () => {
            const result = await fetch(
                "https://rmvd3x7o0c.execute-api.us-east-2.amazonaws.com/Production/galleryimg"
            );
            const json = await result.json();
            setgalleryImg(json);
        };

        data();
    }, []);

    return (
        <div className="scene" id="welcome">
            <article className="content">
                <div className="gallery">
                    {galleryImg.map((img) => (
                        <img
                            key={img.src}
                            src={img.src}
                            alt={img.alt}
                            className={img.className}
                        />
                    ))}
                </div>
                <h1>Welcome to the Landon&nbsp;Hotel</h1>
                <p>
                    The original Landon perseveres after 50 years in the heart
                    of West London. The West End neighborhood has something for
                    everyone—from theater to dining to historic sights. And the
                    not-to-miss Rooftop Cafe is a great place for travelers and
                    locals to engage over drinks, food, and
                    good&nbsp;conversation. &nbsp;To learn more about the Landon
                    Hotel in the West End, browse our website and{" "}
                    <a href="files/landon_information_sheet_London.pdf">
                        download our handy information sheet
                    </a>
                    .
                </p>
            </article>
        </div>
    );
}
