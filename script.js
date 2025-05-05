// Sample draft data - you can modify this with your actual picks
// Last updated: May 5, 2024
const draftData = {
    round1: [
        { pick: 1, team: "Winston's Warriors", player: "Ashton Jeanty", position: "RB", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/CHI" },
        { pick: 2, team: "Winston's Warriors", player: "Tetairoa Mcmillan", position: "WR", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/WAS" },
        { pick: 3, team: "DoosBoys", player: "Omarion Hampton", position: "RB", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/NE" },
        { pick: 4, team: "Dropkick Murphys", player: "Matthew Golden", position: "WR", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/ARI" },
        { pick: 5, team: "Lil Peanut's Padres", player: "Travis Hunter", position: "WR/CB", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/LAC" },
        { pick: 6, team: "Watauga Whonsters", player: "Quinshon Judkins", position: "RB", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/NYG" },
        { pick: 7, team: "Memphis Jets", player: "Cam Ward", position: "QB", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/TEN" },
        { pick: 8, team: "Dropkick Murphys", player: "Treveyon Henderson", position: "RB", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/ATL" },
        { pick: 9, team: "Winston's Warriors", player: "Colston Loveland", position: "TE", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/CHI" },
        { pick: 10, team: "Highland Hawgs", player: "Kaleb Johnson", position: "RB", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/NYJ" },
        { pick: 11, team: "Winston's Warriors", player: "Emeka Egbuka", position: "WR", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/MIN" },
        { pick: 12, team: "Kilpatty Vegas", player: "Luther Burden", position: "WR", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/DEN" }
    ],
    round2: [
        { pick: 13, team: "Winston's Warriors", player: "RJ Harvey", position: "RB", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/GB" },
        { pick: 14, team: "Rocky Top Rowdies", player: "Cam Skattebo", position: "RB", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/TB" },
        { pick: 15, team: "Highland Hawgs", player: "Tyler Warren", position: "TE", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/ARI" },
        { pick: 16, team: "Highland Hawgs", player: "Jaxson Dart", position: "QB", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/SF" },
        { pick: 17, team: "Lil Peanut's Padres", player: "Tre Harris", position: "WR", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/BUF" },
        { pick: 18, team: "Winston's Warriors", player: "Jayden Higgins", position: "WR", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/PHI" },
        { pick: 19, team: "Winston's Warriors", player: "Brayshul Tuten", position: "RB", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/NO" },
        { pick: 20, team: "The Dukes", player: "Jack Bech", position: "WR", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/PIT" },
        { pick: 21, team: "Memphis Jets", player: "Mason Taylor", position: "TE", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/MIA" },
        { pick: 22, team: "Expiring Goods", player: "Kyle Williams", position: "WR", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/BAL" },
        { pick: 23, team: "Lil Peanut's Padres", player: "Jaylin Noel", position: "WR", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/HOU" },
        { pick: 24, team: "Rocky Top Rowdies", player: "Pat Bryant", position: "WR", logo: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/DAL" }
    ]
};

function createPickCard(pick) {
    return `
        <div class="pick-card">
            <div class="pick-number">${pick.pick}</div>
            <img src="${pick.logo}" alt="${pick.team} logo" class="team-logo">
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