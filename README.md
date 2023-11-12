## Jochong Validator
### Usage
```bash
npm i jochong-validator
```
### 1. Number
```javascript
const validator = require('jochong-validator');

const data = 12;

validator(data).isNumber().range(1, 11).end(); // false
validator(data).isNumber().range(1, 13).end(); // true
```
#### method
```typescript
isIn(inArray: array)
range(min: number, max: number)
```

### 2. String
```javascript
const validator = require('jochong-validator');

const data = 'test-smaple';

validator(data).isString().isEmail().end(); // false
validator(data).isString().isNotEmpty().end(); // true
validator(data).isString().length(1, 100).end(); // true
```

#### method
```typescript
length(min: number, max: number)
testRegExp(regExpString: RegExp)
isIn(inArray: array)
isNotEmpty()
isEmail(regExpString?: RegExp)
isPw(regExpString?: RegExp)
isName(regExpString?: RegExp)
isTime(regExpString?: RegExp)
isDateTime(regExpString?: RegExp)
isDate(regExpString?: RegExp)
isOnlyNumber(regExpString?: RegExp)
isOnlyAlpabet(regExpString?: RegExp)
isId(regExpString?: RegExp)
```

### 3. Array
```javascript
const validator = require('jochong-validator');

const data = [1, 2, 3];

validator(data).isString().isAllNumber().end(); // true
validator(data).isString().length(1, 2).end(); // false
```
#### method
```typescript
length(min: number, max: number)
testRegExpAll(regExpString: RegExp)
isAllNumber()
isAllString()
```
