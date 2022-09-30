import rattykai_flushed from "./mascots/rattykai_flushed.png";
import rattykai_hearteyes from "./mascots/rattykai_hearteyes.png";
import rattykai_hello from "./mascots/rattykai_hello.png";
import hackfurs_blep from "./mascots/hackfurs_blep.png";
// import PUNXSimon_flirty from "./mascots/PUNXSimon_flirty.png";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ref from "./ref/astra_reference.png";
import Ion from "./components/Ion";

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
            icon: <Ion name="image" />,
            name: "Reference Sheet",
            description: "The Bun!",
            // link: ref
            link: "https://art.astrabun.com/characters/Astra"
        },
        {
            icon: <Ion name="logo-tiktok" />,
            name: "TikTok",
            // description: "EGG bun makes short videos",
            link: "https://www.tiktok.com/@astra.bun/",
        },
        {
            icon: <Ion name="logo-twitch" />,
            name: "Twitch",
            // description: "Bun play game and stuff, but LIVE",
            link: "https://www.twitch.tv/astrabun",
        },
        {
            icon: <Ion name="document-text" />,
            name: "Blog",
            link: "https://blog.astrabun.com"
        },
        {
            icon: <Ion name="logo-discord" />,
            name: "Discord",
            // description: "",
            link: "https://joinmydiscord.astrabun.tv/",
        },
        {
            icon: <Ion name="logo-twitter" />,
            name: "Twitter",
            // description: "",
            link: "https://twitter.com/astra_bun",
        },
        {
            icon: <Ion name="logo-github" />,
            name: "Github",
            link: "https://github.com/astrabun",
        },
        {
            icon: <Ion name="logo-youtube" />,
            name: "YouTube",
            // description: "",
            link: "https://www.youtube.com/channel/UCJLY1mZasM0fUSHGnuJpPfQ",
        },
        {
            icon: <Ion name="logo-soundcloud" />,
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