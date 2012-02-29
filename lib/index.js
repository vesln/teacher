/**
 * Teacher - Spell check for Node.js
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * `Teacher` class.
 */
var Teacher = require('./lib/teacher');

/**
 * Expose a singleton.
 */
module.exports = new Teacher;

/**
 * Expose the `Teacher`.
 */
module.exports.Teacher = Teacher;
