import rattykai_flushed from "./mascots/rattykai_flushed.png";
import rattykai_hearteyes from "./mascots/rattykai_hearteyes.png";
import rattykai_hello from "./mascots/rattykai_hello.png";
import hackfurs_blep from "./mascots/hackfurs_blep.png";
// import PUNXSimon_flirty from "./mascots/PUNXSimon_flirty.png";

declare global { namespace JSX { interface IntrinsicElements { "ion-icon": any; } } }

interface Link {
    icon: any;
    name: string;
    description?: string;
    link: string;
}

interface Mascot {
    image: string,
    artist: string,
    artistLink?: string,
}

interface Config {
    title: string;
    subtitle: string;
    links: Array<Link>;
    mascots: Array<Mascot>;
}

export const config: Config = {
    title: "Astra",
    subtitle: "Hi, I'm Astra! I make music and play games. (he/they)",
    links: [
        {
            icon: <ion-icon name="logo-tiktok" size="large"></ion-icon>,
            name: "TikTok",
            // description: "EGG bun makes short videos",
            link: "https://www.tiktok.com/@astra.bun/",
        },
        {
            icon: <ion-icon name="logo-twitch" size="large"></ion-icon>,
            name: "Twitch",
            // description: "Bun play game and stuff, but LIVE",
            link: "https://www.twitch.tv/astrabun",
        },
        {
            icon: <ion-icon name="logo-discord" size="large"></ion-icon>,
            name: "Discord",
            // description: "",
            link: "https://joinmydiscord.astrabun.tv/",
        },
        {
            icon: <ion-icon name="logo-twitter" size="large"></ion-icon>,
            name: "Twitter",
            // description: "",
            link: "https://twitter.com/astra_bun",
        },
        {
            icon: <ion-icon name="logo-youtube" size="large"></ion-icon>,
            name: "YouTube",
            // description: "",
            link: "https://www.youtube.com/channel/UCJLY1mZasM0fUSHGnuJpPfQ",
        },
        {
            icon: <ion-icon name="logo-soundcloud" size="large"></ion-icon>,
            name: "SoundCloud",
            // description: "",
            link: "https://soundcloud.com/astrabun",
        },
    ],
    mascots: [
        {
            image: rattykai_flushed,
            artist: "rattykai",
            artistLink: "https://twitter.com/rattykai",
        },
        {
            image: rattykai_hearteyes,
            artist: "rattykai",
            artistLink: "https://twitter.com/rattykai",
        },
        {
            image: rattykai_hello,
            artist: "rattykai",
            artistLink: "https://twitter.com/rattykai",
        },
        {
            image: hackfurs_blep,
            artist: "HACK",
            // artistLink: "",
        },
        // {   // removed, since this is in the page separately
        //     image: PUNXSimon_flirty,
        //     artist: "PUNXSimon",
        //     artistLink: "https://twitter.com/PUNXSimon",
        // },
        // {
        //     image: "null",
        //     artist: "",
        //     // artistLink: "",
        // },
    ]
}