class Player {
    constructor() {
        this.name = null;
        this.distance = 0;
        this.index = null;
        this.rank = 0;
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).update({
            name: this.name,
            distance: this.distance,
            rank: this.rank
        }) 
    }

    updateCount(count) {
        database.ref("/").update({
            playerCount: count
        })
    }

    getCount() {
        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value", function(data){
            playerCount = data.val()
        })
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val()


        })
        


    }
    getRank() {
        var rankRef = database.ref("rank")
        rankRef.on("value", (data)=>{
            this.rank = data.val()
        })
}
   updateRank(rank){
        database.ref("players/player" + this.index).update({
            rank: rank
        })
    }
}