## Jochong Validator
### 1. Number
```javascript
const validator = require('jochong-validator');

const data = 12;

validator(data).isNumber().range(1, 11).end(); // false
validator(data).isNumber().range(1, 13).end(); // true
```

### 2. String
```javascript
const validator = require('jochong-validator');

const data = 'test-smaple';

validator(data).isString().isEmail().end(); // false
validator(data).isString().isNotEmpty().end(); // true
validator(data).isString().length(1, 100).end(); // true
```
### 3. Array
```javascript
const validator = require('jochong-validator');

const data = [1, 2, 3];

validator(data).isString().isAllNumber().end(); // true
validator(data).isString().length(1, 2).end(); // false
```
