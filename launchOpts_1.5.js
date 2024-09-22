if(location.protocol=='http:'){var proto='ws'}else if(location.protocol=='https:'){var proto='wss'};window.WebMCSocketTemplate=(proto+'://'+location.host.replace('m.', ''));
window.eaglercraftOpts = {
    container: "game_frame",
    assetsURI: "assets.epk",
    serverWorkerURI: "worker_bootstrap.js",
    servers: [
        {
            serverAddress: 'wss://webmc.xyz/server/1.5.2',
            serverName: "✫ WebMC", 
            hideAddress: false
        },
        {
            serverAddress: "address here",
            serverName: "placeholder", 
            hideAddress: false
        }
    ],
    relays: [
        { 
            addr: 'wss://relay.webmc.xyz',
            name: "WebMC Relay",
            primary: relayId == 0
        },
        {
            addr: "wss://relay.deev.is/",
            name: "lax1dude relay #1",
            primary: relayId == 1
        },
        {
            addr: "wss://relay.lax1dude.net/",
            name: "lax1dude relay #2",
            primary: relayId == 2
        }//,
//        {
//            addr: "wss://relay.shhnowisnottheti.me/",
//            name: "ayunami relay #1",
//            primary: relayId == 3
//        }
    ],
    mainMenu: { 
        splashes: [
            "Also try Glacier"
        ], 
        eaglerLogo: false
    }
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
