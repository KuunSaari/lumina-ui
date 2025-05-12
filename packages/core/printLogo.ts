export default function printLogo() {
  let PROD,DEV = false
  if (PROD) {
    let logo = `
-----------------------------------------------------------------
  ██╗     ██╗   ██╗███╗   ███╗██╗███╗   ██╗ █████╗ ██╗   ██╗██╗
  ██║     ██║   ██║████╗ ████║██║████╗  ██║██╔══██╗██║   ██║██║
  ██║     ██║   ██║██╔████╔██║██║██╔██╗ ██║███████║██║   ██║██║
  ██║     ██║   ██║██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║   ██║██║
  ███████╗╚██████╔╝██║ ╚═╝ ██║██║██║ ╚████║██║  ██║╚██████╔╝██║
  ╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝ ╚═╝
-----------------------------------------------------------------
                         Lumina UI
                      Author: <Saari>
    `
    const rainbowGradient = `
    background: linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
    background-clip: text;
    color: transparent;
    font-size: 12px;
    `
    console.info(`%c${logo}`, rainbowGradient)
  } else if (DEV) {
    console.log('[Lumina UI]: Dev mode...')
  }
}