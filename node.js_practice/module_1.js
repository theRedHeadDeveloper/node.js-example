/*
function Users() {
    this.name = "";
    this.life = 100;
}

module.exports.Users = new Users();
*/
module.exports = function () {
    function Users() {
        this.name = "";
        this.life = 100;
        this.takLife = function takeLife(targetPlayer){
            targetPlayer.life -= 5;
            console.log(this.name, "just took life from", targetPlayer.name, targetPlayer.life);
        }
    }
    return{
         allUsers: Users(),
         Users: new Users()
        }
    };

