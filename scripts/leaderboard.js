document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById('leaderboard-body');
    const highScores = JSON.parse(localStorage.getItem('snakeLeaderboard')) || [];

    if (highScores.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="3" class="text-center">No scores yet! Get playing.</td></tr>';
    } else {
        tableBody.innerHTML = highScores.map((entry, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${entry.name}</td>
                <td>${entry.score}</td>
            </tr>
        `).join('');
    }

    // Clear Button logic
    document.getElementById('clearBtn').addEventListener('click', () => {
        if(confirm("Are you sure you want to delete all scores?")) {
            localStorage.removeItem('snakeLeaderboard');
            location.reload();
        }
    });
});
