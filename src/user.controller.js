export class UserController{
    constructor(UserService, $routeParams){
        this.userService = UserService
        this.id = $routeParams.id
        this.userService.getUser(this.id)
            .then(user => this.user = user)
    }
}