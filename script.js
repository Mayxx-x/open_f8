
function open_mic() {
    let host_pass = '022216';
    let host_ip = '192.168.15.8';
    
    $('#mic').toggleClass('active');

    $('#status_output').html("Ativado!");


    if ($('#mic').hasClass('active') {
        mic(0);
    }
    else {
        mic(1);
    }

    async function mic(btn) {
        if (btn == 1) {
            await   fetch('https://${host_ip}:9000/?pass=${host  _pass}&cmd=mic&on=1');

    }
    elseif {
         await fetch('https://${host_ip}:9000/?pass=${host_pass}&cmd=mic&on=0');

    }

    console.log(window.location.href);
}