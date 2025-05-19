const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Basic Scientific Calculator Endpoints
app.post('/calculate', (req, res) => {
  const { operation, a, b } = req.body;

  try {
    let result;
    let surdForm = null;

    switch (operation) {
      case 'add': result = a + b; break;
      case 'subtract': result = a - b; break;
      case 'multiply': result = a * b; break;
      case 'divide': result = a / b; break;
      case 'power': result = Math.pow(a, b); break;
      case 'sqrt': result = Math.sqrt(a); break;
      case 'log': result = Math.log(a); break;
      case 'sin':
        result = Math.sin(a);
        const tolerance = 0.001; // Reduced tolerance for more accurate comparisons

        // Calculate expected sine values for common angles in radians
        const sin30 = Math.sin(30 * Math.PI / 180);
        const sin45 = Math.sin(45 * Math.PI / 180);
        const sin60 = Math.sin(60 * Math.PI / 180);
        const sin90 = Math.sin(90 * Math.PI / 180);
        const sin0 = Math.sin(0);
        const sin180 = Math.sin(Math.PI);

        // Determine surd form based on the calculated sine value
        if (Math.abs(result - sin0) < tolerance) surdForm = '0';
        else if (Math.abs(result - sin30) < tolerance) surdForm = '1/2';
        else if (Math.abs(result - sin45) < tolerance) surdForm = '√2/2';
        else if (Math.abs(result - sin60) < tolerance) surdForm = '√3/2';
        else if (Math.abs(result - sin90) < tolerance) surdForm = '1';
        else if (Math.abs(result - sin180) < tolerance) surdForm = '0';
        else surdForm = null;
        break;
      case 'cos': result = Math.cos(a); break;
      case 'tan': result = Math.tan(a); break;
      default: throw new Error('Invalid operation');
    }

    res.json({ result, surdForm });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Quadratic Equation Solver: ax² + bx + c = 0
app.post('/solve/quadratic', (req, res) => {
  const { a, b, c } = req.body;

  if (a === 0) return res.status(400).json({ error: "'a' cannot be zero" });

  const discriminant = b * b - 4 * a * c;
  let solutions = [];

  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    solutions = [root1, root2];
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    solutions = [root];
  } else {
    const realPart = -b / (2 * a);
    const imagPart = Math.sqrt(-discriminant) / (2 * a);
    solutions = [
      `${realPart} + ${imagPart}i`,
      `${realPart} - ${imagPart}i`
    ];
  }

  res.json({ solutions });
});

// Simultaneous Equation Solver (2 variables)
// a1x + b1y = c1
// a2x + b2y = c2
app.post('/solve/simultaneous', (req, res) => {
  const { a1, b1, c1, a2, b2, c2 } = req.body;

  const determinant = a1 * b2 - a2 * b1;

  if (determinant === 0) {
    return res.status(400).json({ error: "No unique solution (lines are parallel or coincident)" });
  }

  const x = (c1 * b2 - c2 * b1) / determinant;
  const y = (a1 * c2 - a2 * c1) / determinant;

  res.json({ solutions: { x, y } });
});

app.listen(PORT, () => {
  console.log(`Scientific Calculator API running on http://localhost:${PORT}`);
});
