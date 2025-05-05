import json

def normalize_name(name):
    return name.lower().replace("'", "").replace("-", "").replace(" ", "")

# Load the players data
with open('players.json', 'r') as f:
    players = json.load(f)

# List of players to search for
search_players = [
    "Ashton Jeanty",
    "Tetairoa Mcmillan",
    "Omarion Hampton",
    "Matthew Golden",
    "Travis Hunter",
    "Quinshon Judkins",
    "Cam Ward",
    "Treveyon Henderson",
    "Colston Loveland",
    "Kaleb Johnson",
    "Emeka Egbuka",
    "Luther Burden",
    "RJ Harvey",
    "Cam Skattebo",
    "Tyler Warren",
    "Jaxson Dart",
    "Tre Harris",
    "Jayden Higgins",
    "Brayshul Tuten",
    "Jack Bech",
    "Mason Taylor",
    "Kyle Williams",
    "Jaylin Noel",
    "Pat Bryant"
]

# Search for each player
for search_name in search_players:
    found = False
    search_normalized = normalize_name(search_name)
    
    for player_id, player_data in players.items():
        if 'first_name' in player_data and 'last_name' in player_data:
            full_name = player_data['first_name'] + " " + player_data['last_name']
            if normalize_name(full_name) == search_normalized:
                print(f"{search_name}: {player_id}")
                found = True
                break
    
    if not found:
        print(f"{search_name}: Not found") 