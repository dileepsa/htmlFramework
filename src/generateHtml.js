const formatProperty = ([name, value]) => name + ':' + value;

const style = (properties) => {
  return Object.entries(properties).map(formatProperty).join(';');
};

const formatAttribute = ([attribName, value]) => {
  let attribValue = value;

  if (attribName === 'style') {
    attribValue = style(value);
  }

  return attribName + '="' + attribValue + '"';
  // return [attribName, attribValue].join('=');
};

const format = (attributes) => {
  return Object.entries(attributes).map(formatAttribute).join(' ');
};

const html = ([tag, attributes, ...content]) => {
  const allAttributes = format(attributes);
  const newContent = content.map(
    elem => Array.isArray(elem) ? html(elem) : elem
  ).join('');

  return '<' + tag + ' ' + allAttributes + '>' + newContent + '</' + tag + '>';
};

console.log(html(
  ['div', { style: { width: '100px', height: '200px' } }]
));

exports.format = format;
exports.formatAttribute = formatAttribute;
exports.style = style;
exports.html = html;
