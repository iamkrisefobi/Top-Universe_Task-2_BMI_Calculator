function calculateBMI () {
    let heightMeters = document.getElementById('height_meters').value;
    let heightInches = document.getElementById('height_inches').value;
    let weight = document.getElementById('weight').value;
    
    document.getElementById('bmi_metric_result').innerHTML = (weight/(heightMeters * heightMeters))
    document.getElementById('bmi_imperial_result').innerHTML = (703 * (weight/(heightInches * heightInches)))
}

// function roundOff {
//     let metric = Math.round(calculateBMI.value);
//     let imperial = Math.round(calculateBMI.value);
    
//     console.log(metric);
//     console.log(imperial);
// }