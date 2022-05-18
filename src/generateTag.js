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

const formatAttributes = (attributes) => {
  return Object.entries(attributes).map(formatAttribute).join(' ');
};

const html = ([tag, attributes, ...content]) => {
  const allAttributes = formatAttributes(attributes);
  const newContent = content.map(
    elem => Array.isArray(elem) ? html(elem) : elem
  ).join('');

  return '<' + tag + ' ' + allAttributes + '>' + newContent + '</' + tag + '>';
};

exports.formatAttributes = formatAttributes;
exports.formatAttribute = formatAttribute;
exports.style = style;
exports.html = html;

// console.log(html(
//   ['div', { id: 1, class: 'something', style: { width: 10, height: 20 } }, 'content']
// ));

// console.log(html(
//   ['html', {},
//     ['head', {},
//       ['title', {}, 'piano'],
//       ['link', { rel: 'stylesheet' }]
//     ],

//   ]
// ));
