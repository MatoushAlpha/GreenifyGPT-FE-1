
window.onload = function() {

    document.getElementById('download_button').addEventListener('click', function() {
        var link = document.createElement('a');
        link.href = 'shortgpt.zip';
        link.download = 'shortgpt.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); 
    });

}
