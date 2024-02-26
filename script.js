function calculateGrade() {
    const englishScore = parseFloat(document.getElementById('english').value);
    const computerScore = parseFloat(document.getElementById('computer').value);
    const mathScore = parseFloat(document.getElementById('math').value);
    const scienceScore = parseFloat(document.getElementById('science').value);
    const hindiScore = parseFloat(document.getElementById('hindi').value);
  
    const totalSubjects = 5;
    const totalScore = englishScore + computerScore + mathScore + scienceScore + hindiScore;
    const averageScore = totalScore / totalSubjects;
  
    let grade;
    if (averageScore >= 90) {
      grade = 'A';
    } else if (averageScore >= 80) {
      grade = 'B';
    } else if (averageScore >= 70) {
      grade = 'C';
    } else if (averageScore >= 60) {
      grade = 'D';
    } else {
      grade = 'F';
    }
  
    const output = document.getElementById('output');
    output.innerHTML = `Average Grade: ${averageScore.toFixed(2)} (${grade})`;
  }
  

