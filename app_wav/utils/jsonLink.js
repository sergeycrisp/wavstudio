const html2jade = require('html2jade');
const util = require('util');

const htmlJade = util.promisify(html2jade.convertDocument);
const a = JSON.stringify(
  `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/987440383&color=%231c1c1c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/wavbeatstudio" title="WAV Studio | Beats" target="_blank" style="color: #cccccc; text-decoration: none;">WAV Studio | Beats</a> · <a href="https://soundcloud.com/wavbeatstudio/wav-studio-crisp-default-type-beat-metro-boomin-free" title="[WAV Studio] Crisp - Default [ Type Beat Metro Boomin Free ]" target="_blank" style="color: #cccccc; text-decoration: none;">[WAV Studio] Crisp - Default [ Type Beat Metro Boomin Free ]</a></div>`
);
htmlJade(a).then((b) => console.log(b));
