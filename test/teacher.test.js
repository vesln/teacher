/**
 * Teacher - Spell check for Node.js
 *
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Support.
 */
var should = require('chai').should();
var jack = require('jack');


/**
 * Context
 */
var Teacher = require('../lib/teacher');

describe('Teacher', function() {
	describe('when constructed', function() {
    it('should setup ignored types', function() {
      var teacher = new Teacher;
      teacher.ignore().should.eql(['bias language', 'cliches', 'complex expression', 'diacritical marks', 'double negatives', 'hidden verbs', 'jargon language', 'passive voice', 'phrases to avoid', 'redundant expression']);
    });

    describe('with ignore types', function() {
      it('should overwrite them both', function() {
				var teacher = new Teacher('en', ['foo']);
        teacher.ignore().should.eql(['foo']);
      });
    });
	});
});
