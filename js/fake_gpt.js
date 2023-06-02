


// set interval


output_long = "The highest mountain in the world is Mount Everest. It is located in the Himalayas on the border of Nepal and China (Tibet Autonomous Region). Mount Everest has an elevation of 8,848.86 meters (29,031.7 feet) above sea level, making it the highest point on Earth. It is a popular destination for mountaineers from around the world, but reaching the summit is a challenging and dangerous undertaking that requires experience and careful preparation."

output_short = "Mount Everest."




setInterval(function() {

    output_element_long = document.getElementById("gpt_output_without_text");
    current_text_long = output_element_long.innerHTML;


    if (current_text_long.length < output_long.length) {
        output_element_long.innerHTML = output_long.substring(0, current_text_long.length + 1);
    }

    output_element_short = document.getElementById("gpt_output_with_text");
    current_text_short = output_element_short.innerHTML;

    if (current_text_short.length < output_short.length) {
        output_element_short.innerHTML = output_short.substring(0, current_text_short.length + 1);
    }

}, 50);
