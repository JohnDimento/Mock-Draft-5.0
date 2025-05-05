// Sample draft data - you can modify this with your actual picks
const draftData = {
    round1: [
        { pick: 1, team: "Winston's Warriors", player: "Ashton Jeanty", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png" },
        { pick: 2, team: "Winston's Warriors", player: "Tetairoa Mcmillan", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png" },
        { pick: 3, team: "DoosBoys", player: "Omarion Hampton", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },
        { pick: 4, team: "Dropkick Murphys", player: "Matthew Golden", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },
        { pick: 5, team: "Lil Peanut's Padres", player: "Travis Hunter", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },
        { pick: 6, team: "Watauga Whonsters", player: "Quinshon Judkins", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },
        { pick: 7, team: "Memphis Jets", player: "Cam Ward", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },
        { pick: 8, team: "Dropkick Murphys", player: "Treveyon Henderson", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },
        { pick: 9, team: "Winston's Warriors", player: "Colston Loveland", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },
        { pick: 10, team: "Highland Hawgs", player: "Kaleb Johnson", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },
        { pick: 11, team: "Winston's Warriors", player: "Emeka Egbuka", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },
        { pick: 12, team: "Kilpatty Vegas", player: "Luther Burden", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },   
        
        // Add more picks as needed
    ],
    round2: [
        { pick: 13, team: "Winston's Warriors", player: "RJ Harvey", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png" },
        { pick: 14, team: "Rocky Top Rowdies", player: "Cam Skattebo", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png" },
        { pick: 15, team: "Highland Hawgs", player: "Tyler Warren", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png" },
        { pick: 16, team: "Highland Hawgs", player: "Jaxson Dart", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },
        { pick: 17, team: "Lil Peanut's Padres", player: "Tre Harris", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },
        { pick: 18, team: "Winston's Warriors", player: "Jayden Higgins", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },
        { pick: 19, team: "Winston's Warriors", player: "Brayshul Tuten", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },
        { pick: 20, team: "The Dukes", player: "Jack Bech", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },
        { pick: 21, team: "Memphis Jets", player: "Mason Taylor", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },
        { pick: 22, team: "Expiring Goods", player: "Kyle Williams", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },
        { pick: 23, team: "Lil Peanut's Padres", player: "Jaylin Noel", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },
        { pick: 24, team: "Rocky Top Rowdies", player: "Pat Bryant", logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png" },







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