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

setTimeout(()=>{
    document.body.insertAdjacentHTML("afterbegin", `<div id="_gl_div" style="width:100vw;height:100vh;z-index:9999;background:#111;color:white;display:flex;justify-content:center;align-items:center;position:absolute;top:0;left:0;"><p id="_gl_c2s">click me to start</p></div>`);
document.querySelector("#_gl_c2s").addEventListener('click', (e)=>{
    document.querySelector("#_gl_div").remove();
});
const e = document.createElement('button');
    e.style.width = "12px";
    e.style.height = "12px";
    e.style.position = "absolute";
    e.style.top = "0px";
    e.style.left = "0px";
    e.style.zIndex = "9999";
    e.style.border = "1px solid white";
    e.style.background = "#333";
    e.style.borderRadius = "6px";
    e.addEventListener('click', ()=>{
    document.body.insertAdjacentHTML("afterbegin", `<div id="_gl_div" style="width:100vw;height:100vh;z-index:9999;background:#111;color:white;display:flex;justify-content:center;align-items:center;position:absolute;top:0;left:0;"><p id="_gl_c2s">click me to start</p></div>`);
document.querySelector("#_gl_c2s").addEventListener('click', (e)=>{
    document.querySelector("#_gl_div").remove();
});
    });
document.body.appendChild(e);
},500);
