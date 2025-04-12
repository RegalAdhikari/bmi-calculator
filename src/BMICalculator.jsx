import React, { useState } from 'react';
import "./BMICalculator.css";
function BMICalculator(props) {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState("");

    const calculateBMI = () => {
        if (weight && height) {
            const heightInMeters = height / 100;
            const calculatedBmi = (weight / (heightInMeters * heightInMeters));
            setBmi(calculatedBmi.toFixed(2));
            if (calculatedBmi < 18.5) {
                setCategory("Underweight");
                
            }
            else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
                setCategory("Normal weight");
                
            }
            else if (calculatedBmi >= 24.9 && calculatedBmi < 29.9) {
                setCategory("Overweight");
                
            } else {
                setCategory("Obese");
                
            }
        } else {
            alert("Please enter valid weight and height.");
        }
    }

    return (
        <div className='bmi-card'>
            <h2>BMI Calculator</h2>
            <div className='input-group'>
                <label htmlFor="">Weight (kg)</label>
                <input 
                type="number" 
                value={weight} 
                onChange={(e) => setWeight(e.target.value)}
                placeholder='Enter your weight'
                />
            </div>
            <div className='input-group'>
                <label htmlFor="">Height (cm)</label>
                <input 
                type="number" 
                value={height} 
                onChange={(e) => setHeight(e.target.value)}
                placeholder='Enter your height'
                />
            </div>
            <button className='btn-calculator' onClick={calculateBMI}>Calculate BMI</button>
            {
                bmi && (
                    <div className='result'>
                        <h3>Your BMI is: {bmi}</h3>
                        <h4>Cayegory: {category}</h4>
                    </div>
                )
            }
        </div>
    );
}
export default BMICalculator;