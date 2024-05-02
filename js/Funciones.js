$(document).ready(function()
{
    $(".playlist").audioControls(
    { 

        autoPlay:false,
        timer:'increment',
        onAudioChange:function(datos)
        {
            $(".nombremp3").text();
        }
        
    });
   
});