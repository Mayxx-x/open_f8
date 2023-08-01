
async function open_mic() {
    let pass = '022216';
    let host_ip = '192.168.0.15';
    
    $('#mic').toggleClass('active');

    $('#status_output').html("Ativado!");

    //let response = await fetch('http://${host_ip}/9000/?pass=${host_pass}&action=mic&on=1');

    console.log(window.location.href);
}