document.getElementById('equation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const equation = document.getElementById('equation').value;
    let solutionElement = document.getElementById('solution');
    
    try {
        const solution = math.simplify(equation).toString();
        solutionElement.textContent = `Solution: ${solution}`;
    } catch (error) {
        solutionElement.textContent = 'Error: Invalid equation.';
    }
});
