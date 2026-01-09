/**
 * Utility Functions
 * Common helper functions used across the application
 */

/**
 * Format date to ISO string
 * @param {Date} date 
 * @returns {string}
 */
function formatDate(date) {
    return date.toISOString().split('T')[0];
}

/**
 * Generate random ID
 * @returns {string}
 */
function generateId() {
    return Math.random().toString(36).substring(2, 9);
}

/**
 * Deep clone an object
 * @param {Object} obj 
 * @returns {Object}
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Delay execution
 * @param {number} ms 
 * @returns {Promise}
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
    formatDate,
    generateId,
    deepClone,
    delay
};
