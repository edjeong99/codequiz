/ Converts a URL Query String into an object map


let namespace = (root, path, value) => {
    let fields = path.split('.'), cur = root;
    fields.forEach((field, i) => cur = cur[field] = i === fields.length - 1 ? value : cur[field] || {});

  return root;
};

let parseQuery = queryString => queryString.split('&')
    .map(s => s.split('='))
    .reduce((root, [key, value]) => {
    
        namespace(root, decodeURIComponent(key), decodeURIComponent(value));
        return root;
    }, {});

function convertQueryToMap(query) {
  // add your code here
  return query.length === 0 ? "" : parseQuery(query);
}


var q = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue',
    out = {
      'user': {
        'name': {
          'firstname': 'Bob',
          'lastname': 'Smith'
        },
        'favoritecolor': 'Light Blue'
      }
    };
convertQueryToMap(q);