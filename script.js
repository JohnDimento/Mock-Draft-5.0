// Sample draft data - you can modify this with your actual picks
const draftData = {
    round1: [
        { pick: 1, team: "Bears", player: "Caleb Williams", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png" },
        { pick: 2, team: "Commanders", player: "Jayden Daniels", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png" },
        { pick: 3, team: "Patriots", player: "Drake Maye", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },
        // Add more picks as needed
    ],
    round2: [
        { pick: 25, team: "Packers", player: "Cooper DeJean", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png" },
        { pick: 26, team: "Buccaneers", player: "Troy Fautanu", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png" },
        { pick: 27, team: "Cardinals", player: "Kool-Aid McKinstry", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png" },
        // Add more picks as needed
    ]
};

function createPickCard(pick) {
    return `
        <div class="pick-card bg-white rounded-lg p-4 shadow flex items-center space-x-4 hover:shadow-lg">
            <div class="pick-number">${pick.pick}</div>
            <img src="${pick.logo}" alt="${pick.team} logo" class="team-logo">
            <div class="flex-1">
                <div class="font-bold text-nfl-blue">${pick.team}</div>
                <div class="text-gray-600">${pick.player}</div>
            </div>
        </div>
    `;
}

function renderDraftBoard() {
    const round1Container = document.getElementById('round1');
    const round2Container = document.getElementById('round2');

    // Render Round 1
    round1Container.innerHTML = draftData.round1
        .map(pick => createPickCard(pick))
        .join('');

    // Render Round 2
    round2Container.innerHTML = draftData.round2
        .map(pick => createPickCard(pick))
        .join('');
}

// Initialize the draft board when the page loads
document.addEventListener('DOMContentLoaded', renderDraftBoard); 