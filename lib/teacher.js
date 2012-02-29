/**
 * Teacher - Spell check for Node.js
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * `Teacher` constructor.
 *
 * @param {Array} Ignored types.
 */
function Teacher(ignored) {
  this.ignored = ignored || [
    'bias language', 'cliches', 'complex expression',
    'diacritical marks', 'double negatives', 'hidden verbs',
    'jargon language', 'passive voice', 'phrases to avoid',
    'redundant expression'
  ];
};

/**
 * Returns ignored types.
 *
 * @returns {Array}
 * @api public
 */
Teacher.prototype.ignore = function() {
  return this.ignored;
};

/**
 * Expose `Teacher`.
 */
module.exports = Teacher;
