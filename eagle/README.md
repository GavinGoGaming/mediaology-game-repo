# eagles
Big eagles!

This repo contains no property of Mojang through it's source code. It's merely compiled HTML websites.







### Some personal utilities
**modify "eagler client bundle/signature"**
1. open an offline eagler html build up, specifically one that uses these signatures
2. find the style tag of type "eagler client bundle" (or something along those lines)
3. copy contents into web browser to download (ez)
4. upload contents into a [gzip decompresser](https://gzip.swimburger.net/)
5. download this file as/rename it as "blahblahblah.js"
6. open your freshly uncompressed file and modify its contents (ex. doing stuff after main(), modifying fallback opts)
7. re-gzip compress from same link above
8. convert to data link through many tools online (or just do it urself using b64 bruh)
9. change the style tag
