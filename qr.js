

var qs = (function (a) {
    if (a === "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=', 2);
        if (p.length === 1) {
            b[p[0]] = "";
        } else {
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
    }
    return b;
})(window.location.search.substr(1).split('&'));

var peerConfigs = {
    host: 'stan.yesid.tech',
    port: 9000,
    path: '/myapp'
};

var peerSender;
var peerId = '';
var peer = new Peer({config:peerConfigs});
var conn = peer.on('open', function (id) {
        conn = peer.connect(qs['id']);
        peerSender = conn;
        peerId = id;
});

var qr = new QRious({
    element: document.getElementById('qr-code-card'),
    size: 300,
    value: window.location.protocol + "//" + window.location.hostname //'https://webocr.aymzz.com'
});

var qrtext = window.location.protocol + "//" + window.location.hostname + "/mobileindex?id=" + peerId;
qr.set({
    foreground: "orange",
    size: 300,
    value: qrtext
});

peer.on('connection', function (call) {
    //recieve qr messages
    call.on('data', function (data) {
    
    });

    //send qr messages
   
});