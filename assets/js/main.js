/**
 * Define the function to calculate the BMI.
 * Print the BMI Calculate the Height & Weight.
 */
function calculateBMI() {
    // Declare weight and height variable to get the height and weght from input.
    const weight = parseFloat(document.getElementById('weightInput').value);
    let height = parseFloat(document.getElementById('heightInput').value); // Use let because height need to modifie.
    const result = document.getElementById('result'); // Declare the result variable to show the BMI value.
    const reset = document.getElementById('resetBtn'); // Declare the reset variable to manupulate the reset button.

    // Check the height and weight value valid or not.
    if ((weight === '' || isNaN(weight) || weight <= 0) && (height === '' || isNaN(height) || height <= 0)) {
        alert(`Please provide a valid weight and height`); // If height and weight are not valid then this alert with show.
    } else if (weight === '' || isNaN(weight) || weight <= 0) {
        alert(`Please provide a valid weight`); // If weight are not valid then this alert with show.
    } else if (height === '' || isNaN(height) || height <= 0) {
        alert(`Please provide a valid height`); // If height are not valid then this alert with show.
    } else {
        // If height and weight are valid the we go to calculate the BMI.
        height = height / 100; // Conver height "CM" to "M". Because we get the height in centimeters from the input.
        /**
         * Calculate the BMI:
         * BMI Formula = (weight(kg) / (height(m) * height(m)).
         * Show the result using JS DOM "innerHTML" on result variable.
         */
        result.innerHTML = (weight / (height * height)).toFixed(2); // Using the toFixed(2) method to display the two digits after the decimal point. toFixed() JS default method.
        reset.style.display = 'block'; // Display the reset button after calculating BMI. By deafult the reset button is hidden.
    }
}

/**
 * Define the function to reset the all value.
 */
function resetValue() {
    document.getElementById('form').reset(); // Reset the form. reset() is the JS BuiltIn method
    document.getElementById('resetBtn').style.display = 'none'; // Hide the reset button.
    document.getElementById('result').innerHTML = ''; // Reset the BMI result empty!
}
