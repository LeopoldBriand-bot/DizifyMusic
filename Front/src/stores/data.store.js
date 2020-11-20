export default class CommonDataManager {

    static myInstance = null;

    _userId = 0;
    _username = null;
    _roles = [""];
    _authToken = null;


    /**
     * @returns {CommonDataManager}
     */
    static getInstance() {
        if (CommonDataManager.myInstance == null) {
            CommonDataManager.myInstance = new CommonDataManager();
        }

        return this.myInstance;
    }

    getStore() {
        return {
            userId: this._userId,
            username: this._username,
            roles: this._roles,
            authToken: this._authToken
        }
    }

    setStore(store) {
        this._userId = store.userId;
        this._username = store.username;
        this._roles = store.roles;
        this._authToken = store.authToken;
    }

    getUserID() {
        return this._userId;
    }

    setUserID(id) {
        this._userId = id;
    }

    getUsername() {
        return this._username;
    }

    setUsername(username) {
        this._username = username;
    }

    getRoles() {
        return this._roles;
    }

    setRoles(roles) {
        this._roles = roles;
    }

    getAuthToken() {
        return this._authToken;
    }

    setAuthToken(authToken) {
        this._authToken = authToken;
    }
}