// Sample draft data - you can modify this with your actual picks
// Last updated: May 5, 2024
const draftData = {
    round1: [
        { pick: 1, team: "Winston's Warriors", player: "Ashton Jeanty", position: "RB", player_id: "12527", image: "https://sleepercdn.com/content/nfl/players/12527.jpg" },
        { pick: 2, team: "Winston's Warriors", player: "Tetairoa Mcmillan", position: "WR", player_id: "12526", image: "https://sleepercdn.com/content/nfl/players/12526.jpg" },
        { pick: 3, team: "DoosBoys", player: "Omarion Hampton", position: "RB", player_id: "12507", image: "https://sleepercdn.com/content/nfl/players/12507.jpg" },
        { pick: 4, team: "Dropkick Murphys", player: "Matthew Golden", position: "WR", player_id: "12501", image: "https://sleepercdn.com/content/nfl/players/12501.jpg" },
        { pick: 5, team: "Lil Peanut's Padres", player: "Travis Hunter", position: "WR/CB", player_id: "12530", image: "https://sleepercdn.com/content/nfl/players/12530.jpg" },
        { pick: 6, team: "Watauga Whonsters", player: "Quinshon Judkins", position: "RB", player_id: "12512", image: "https://sleepercdn.com/content/nfl/players/12512.jpg" },
        { pick: 7, team: "Memphis Jets", player: "Cam Ward", position: "QB", player_id: "12549", image: "https://sleepercdn.com/content/nfl/players/12549.jpg" },
        { pick: 8, team: "Dropkick Murphys", player: "Treveyon Henderson", position: "RB", player_id: "12529", image: "https://sleepercdn.com/content/nfl/players/12529.jpg" },
        { pick: 9, team: "Winston's Warriors", player: "Colston Loveland", position: "TE", player_id: "12517", image: "https://sleepercdn.com/content/nfl/players/12517.jpg" },
        { pick: 10, team: "Highland Hawgs", player: "Kaleb Johnson", position: "RB", player_id: "2967", image: "https://sleepercdn.com/content/nfl/players/2967.jpg" },
        { pick: 11, team: "Winston's Warriors", player: "Emeka Egbuka", position: "WR", player_id: "12514", image: "https://sleepercdn.com/content/nfl/players/12514.jpg" },
        { pick: 12, team: "Kilpatty Vegas", player: "Luther Burden", position: "WR", player_id: "12519", image: "https://sleepercdn.com/content/nfl/players/12519.jpg" }
    ],
    round2: [
        { pick: 13, team: "Winston's Warriors", player: "RJ Harvey", position: "RB", player_id: "12488", image: "https://sleepercdn.com/content/nfl/players/12488.jpg" },
        { pick: 14, team: "Rocky Top Rowdies", player: "Cam Skattebo", position: "RB", player_id: "12481", image: "https://sleepercdn.com/content/nfl/players/12481.jpg" },
        { pick: 15, team: "Highland Hawgs", player: "Tyler Warren", position: "TE", player_id: "12518", image: "https://sleepercdn.com/content/nfl/players/12518.jpg" },
        { pick: 16, team: "Highland Hawgs", player: "Jaxson Dart", position: "QB", player_id: "12508", image: "https://sleepercdn.com/content/nfl/players/12508.jpg" },
        { pick: 17, team: "Lil Peanut's Padres", player: "Tre Harris", position: "WR", player_id: "12509", image: "https://sleepercdn.com/content/nfl/players/12509.jpg" },
        { pick: 18, team: "Winston's Warriors", player: "Jayden Higgins", position: "WR", player_id: "12484", image: "https://sleepercdn.com/content/nfl/players/12484.jpg" },
        { pick: 19, team: "Winston's Warriors", player: "Brayshul Tuten", position: "RB", player_id: "12551", image: "https://sleepercdn.com/content/nfl/players/12551.jpg" },
        { pick: 20, team: "The Dukes", player: "Jack Bech", position: "WR", player_id: "12482", image: "https://sleepercdn.com/content/nfl/players/12482.jpg" },
        { pick: 21, team: "Memphis Jets", player: "Mason Taylor", position: "TE", player_id: "12497", image: "https://sleepercdn.com/content/nfl/players/12497.jpg" },
        { pick: 22, team: "Expiring Goods", player: "Kyle Williams", position: "WR", player_id: "7437", image: "https://sleepercdn.com/content/nfl/players/7437.jpg" },
        { pick: 23, team: "Lil Peanut's Padres", player: "Jaylin Noel", position: "WR", player_id: "12535", image: "https://sleepercdn.com/content/nfl/players/12535.jpg" },
        { pick: 24, team: "Rocky Top Rowdies", player: "Pat Bryant", position: "WR", player_id: "12491", image: "https://sleepercdn.com/content/nfl/players/12491.jpg" }
    ]
};

function createPickCard(pick) {
    return `
        <div class="pick-card">
            <div class="pick-number">${pick.pick}</div>
            <img src="${pick.image}" alt="${pick.player}" class="player-image" onerror="this.src='https://sleepercdn.com/images/v2/icons/player_default.webp'">
            <div class="pick-details">
                <div class="team-name">${pick.team}</div>
                <div class="player-name">${pick.player} - ${pick.position}</div>
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