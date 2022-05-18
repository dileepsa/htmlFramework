const { html } = require('../src/generateTag.js');
const assert = require('assert');

describe('html', () => {
  it('Should Create tag with no attribute', () => {
    const actual = html(['div', {}, 'this is text']);
    const expected = "<div >this is text</div>";
    assert.strictEqual(actual, expected);
  });

  it('Should Create tag with class', () => {
    const actual = html(['div', { class: 'something' }, 'this is text']);
    const expected = '<div class="something">this is text</div>';
    assert.strictEqual(actual, expected);
  });

  it('Should Create tag with no content', () => {
    const actual = html(['div', {},]);
    const expected = '<div ></div>';
    assert.strictEqual(actual, expected);
  });
});