exports.calculateBMI = (req, res) => {
    const { weight, height } = req.body;

    if (!weight || !height) {
        return res.status(400).json({ error: 'Weight and height are required.' });
    }

    const heightInMeters = height > 3 ? height / 100 : height; // Convert cm to meters if height is in cm
    const bmi = weight / (heightInMeters * heightInMeters);
    const bmiRounded = bmi.toFixed(2);

    let category = '';

    if (bmi < 18.5)  category = 'Underweight';
    else if (bmi < 24.9) category = 'Normal weight';
    else if (bmi < 29.9) category = 'Overweight';
    else category = 'Obese';

    res.json({
        bmi: bmiRounded,
        category,
    });
};