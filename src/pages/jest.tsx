import React from "react";
import Head from "next/head";

import Image from "next/image";

export default function Home(): React.ReactElement {
    return (
        <>
            <Head>
                <title>Popular Concert Venue</title>
            </Head>
            <div>
                <Image
                    alt="Concert goer with hands in the shape of a heart"
                    src="/splash/heart-hands.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div>
                    <h1>
                        Welcome to
                        <br />
                        Popular Concert Venue
                    </h1>
                </div>
            </div>
        </>
    );
}
