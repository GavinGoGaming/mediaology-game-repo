if(location.protocol=='http:'){var proto='ws'}else if(location.protocol=='https:'){var proto='wss'};window.WebMCSocketTemplate=(proto+'://'+location.host.replace('m.', ''));
window.eaglercraftXOpts = {
    enableMinceraft: false,
    container: "game_frame",
    assetsURI: "assets.epk",
    localesURI: "lang/",
    servers: [
        {
            addr: 'wss://ws.webmc.xyz',
            name: "§a§l✫ WebMC"
        },
        {
            addr: 'wss://eagler.eaglesmp.org',
            name: "§9§l✫ EagleSMP"
        }
    ],
    "relays": [
        {
            "addr": 'wss://relay.webmc.xyz',
            "comment": "WebMC Relay",
            "primary": true
        },
        {
            "addr": "wss://relay.deev.is/",
            "comment": "LAX1DUDE's Shared World Relay #1",
            "primary": false
        },
        {
            "addr": "wss://relay.lax1dude.net/",
            "comment": "LAX1DUDE's Shared World Relay #2",
            "primary": false
        }//,
//        {
//            "addr": "wss://relay.shhnowisnottheti.me/",
//            "comment": "ayunami's Public Relay",
//            "primary": false
//        }
    ]
};
