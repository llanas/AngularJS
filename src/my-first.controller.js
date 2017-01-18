export class MyFirstController {
    constructor(UserService, Version) {
        this.version = Version
        this.cssClass = false;
        this.name = '';
        this.filterType = '';
        UserService.getUsers()
            .then(users => {
                this.users = users
        })
        this.userService = UserService
    }

    saveUser(form, user) {
        if(form.$invalid) return;

        this.userService.saveUser(user)
            .then(user => this.upsert(user))
            .then(() => {
                this._initUser();
                form.$setPristine(true);
            });
    }

    upsert(user) {
        const idx = this.users.findIndex(u => u.id === user.id)
        if(idx) {
            this.user[idx] = user
        } else {
            this.users.push(user)
        }
    }

    deleteUser(user) {
        user.deleted = true;
        this.userService.deleteUser(user)
            .then(user => {
                this.users = this.users.filter(u => u.id !== user.id)
            })
    }

    updateUser(user) {
        this.user = angular.copy(user)
    }

    _initUser() {
        this.user = { name: '', age: 0 }
    }
}