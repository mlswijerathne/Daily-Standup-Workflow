/**
 * Authentication Module
 * Handles user login, logout, and token management
 */

class AuthService {
    constructor() {
        this.isAuthenticated = false;
        this.currentUser = null;
    }

    /**
     * Authenticate user with credentials
     * @param {string} username 
     * @param {string} password 
     * @returns {Promise<Object>} User object
     */
    async login(username, password) {
        // Validate credentials
        if (!username || !password) {
            throw new Error('Username and password are required');
        }

        // Simulate API call
        this.isAuthenticated = true;
        this.currentUser = { username, role: 'user' };

        return this.currentUser;
    }

    /**
     * Logout current user
     */
    logout() {
        this.isAuthenticated = false;
        this.currentUser = null;
    }

    /**
     * Check if user is authenticated
     * @returns {boolean}
     */
    isLoggedIn() {
        return this.isAuthenticated;
    }
}

module.exports = AuthService;
