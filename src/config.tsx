import rattykai_flushed from "./mascots/rattykai_flushed.png";
import rattykai_hearteyes from "./mascots/rattykai_hearteyes.png";
import rattykai_hello from "./mascots/rattykai_hello.png";
import hackfurs_blep from "./mascots/hackfurs_blep.png";
// import PUNXSimon_flirty from "./mascots/PUNXSimon_flirty.png";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ref from "./ref/astra_reference.png";
import Ion from "./components/Ion";

import KeyboardIcon from '@mui/icons-material/Keyboard';

interface Link {
    icon: any;
    name: string;
    description?: string;
    link: string;
    special?: string;
    specialDetail?: string;
    customRel?: string;
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
    subtitle: "Hi, I'm Astra! I code, make music, and play games. (he/they)",
    links: [
        //{
        //    icon: <Ion name="caret-forward-circle" />,
        //    name: "NEW: Progressive Muscle Relaxation Video",
        //    description: "Since you all seem to like the hypno-eyes and my voice on Twitch, have some \"diet hypno\"!",
        //    // link: ref
        //    link: "https://go.astrabun.com/pmr"
        //}, // FIXME: TEMPORARY, REMOVE ABOVE AFTER VIDEO HAS BEEN UP FOR A LITTLE
        {
            icon: <Ion name="map" />,
            name: "[ANTHROCON 2024] Find My Astra",
            description: "Lil web app to get an idea of where I am if you're looking for me! (valid only while at AC2024)",
            // link: ref
            link: "https://anthrocon.astrabun.com/"
        },
        {
            icon: <Ion name="image" />,
            name: "Reference Sheet",
            description: "The Bun!",
            // link: ref
            link: "https://art.astrabun.com/characters/Astra"
        },
        {
            icon: <Ion name="logo-mastodon" />,
            name: "Mastodon",
            // description: "Previously: @astra@yiff.life; migrated 2023-07-13 briefly to @astrabun@mastodon.social, then stood up my own instance in the fediverse :3c",
            description: "Technically.... It's Iceshrimp",
            // link: "https://yiff.life/@astra",
            // link: "https://mastodon.social/@astrabun",
            link: "https://bnuy.zone/@astra",
            customRel: "me",
        },
        {
            name: "Bluesky",
            link: "https://bsky.app/profile/astra.bunnys.ky",
            description: "Where I Post My Skeets",
            // description: "Formerly https://bsky.app/profile/astrabun.bsky.social (changed to custom domain handle)",
            // description: "Formerly astrabun.bsky.social (changed to custom domain handle)",
            // icon: <>🟦</>,
            icon: <Ion name="cloud" />,
        },
        {
            name: "Photography",
            link: "https://photography.astrabun.com",
            description: "Photos taken on Canon EOS R7",
            icon: <Ion name="camera" />,
        },
        {
            icon: <Ion name="logo-twitch" />,
            name: "Twitch",
            description: "Bun play game and stuff",
            link: "https://www.twitch.tv/astrabun",
        },
        {
            icon: <Ion name="logo-tiktok" />,
            name: "TikTok",
            description: "Short videos for short attention spans",
            link: "https://www.tiktok.com/@astra.bun/",
            // link: "https://www.youtube.com/watch?v=k10sN1Yt3sg", // temp, while banned
            // special: "tempInfo",
            // specialDetail: `UPDATE 02: My account seems to be back. Check my YouTube link below for a deeper dive. I might write a blog post about it too, not sure yet. I'll remove this long message once it's been back online for a bit. 
            // UPDATE 01 (2022-10-08 12:45 AM ET): Click this message to view a YouTube video where I talk a little bit about this happening.(Link now reset to TikTok link)
            // Original Message: 
            // TikTok has banned me without explanation and I am struggling to find a way to get my account back. Please stand by for updates. Main methods of reaching folks will be Twitter and Discord until I can get this sorted out.
            // `
            // specialDetail: `UPDATE 01 (2022-10-08 12:45 AM ET): Click this message to view a YouTube video where I talk a little bit about this happening.
            // Original Message: 
            // TikTok has banned me without explanation and I am struggling to find a way to get my account back. Please stand by for updates. Main methods of reaching folks will be Twitter and Discord until I can get this sorted out.
            // `
        },
        {
            icon: <Ion name="logo-youtube" />,
            name: "YouTube",
            description: "Main Channel",
            //link: "https://www.youtube.com/channel/UCJLY1mZasM0fUSHGnuJpPfQ",
            link: "https://youtube.com/@AstraBun",
        },
        {
            icon: <KeyboardIcon />,
            name: "Monkeytype",
            description: "Bnunny type fast",
            link: "https://monkeytype.com/profile/astrabun",
        },
        {
            icon: <Ion name="logo-github" />,
            name: "Github",
            description: "if(astra.isBun()) { say('EGG') }",
            link: "https://github.com/astrabun",
        },
        {
            icon: <Ion name="document-text" />,
            name: "Blog",
            description: "TOTALLY going to remember to post to this... TOTALLY...",
            link: "https://blog.astrabun.com"
        },
        {
            icon: <Ion name="logo-discord" />,
            name: "Discord",
            description: "Share your memes and hang out!",
            link: "https://joinmydiscord.astrabun.tv/",
        },
        {
            icon: <Ion name="logo-youtube" />,
            name: "VODs/Highlights/Clips Channel",
            description: "Secondary YouTube Channel",
            link: "https://youtube.com/@AstraBun2",
        },
        {
            icon: <Ion name="logo-youtube" />,
            name: "TikTok Archive Channel",
            description: "Tertiary YouTube Channel (Just In Case TikTok Explodes)",
            link: "https://youtube.com/@AstraBun3",
        },
        {
            icon: <Ion name="logo-soundcloud" />,
            name: "SoundCloud",
            description: "Not posting often, but I do have one!",
            link: "https://soundcloud.com/astrabun",
        },
        {
            icon: <Ion name="logo-twitter" />,
            name: "Stinky Bad Elon Hellsite X",
            description: "The site formerly known as Twitter",
            link: "https://twitter.com/astra_bun",
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
