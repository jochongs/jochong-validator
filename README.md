## Jochong Validator
### Usage
```bash
npm i jochong-validator
```

```javascript
const validator = require('jochong-validator')
const data = 'hello world';

validator(data).~~~.~~~.end();
```
At first, you have to check your data type with `isNumber`, `isString` and `isArray` method.

Then, you can use method you want.

Finally, you have to call end method to get the validation value of the boolean type.

( If you want the variable to be optional, You can use `optional` method before using Type Checking Method. )
```javascript
const data = req.body.contents;

validator(data).optional().isString().length(1, 200).end();
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
// Check data is In InArray
isIn(inArray: array)

// Check data range
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
// Check data length
length(min: number, max: number)

// Check data is satisfied with reg exp
testRegExp(regExpString: RegExp)

// Check data is In InArray
isIn(inArray: array)

// Check data is not empty
isNotEmpty()

// Check data format
isEmail(regExpString?: RegExp)
isPw(regExpString?: RegExp)
isName(regExpString?: RegExp)
isTime(regExpString?: RegExp)
isDateTime(regExpString?: RegExp)
isDate(regExpString?: RegExp)
isOnlyNumber(regExpString?: RegExp)
isOnlyAlpabet(regExpString?: RegExp)
isId(regExpString?: RegExp)

// use trim method to data
trim()
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
// Check data length
length(min: number, max: number)

// Check all elements of data is satisfied with reg exp
testRegExpAll(regExpString: RegExp)

// Check data format
isAllNumber()
isAllString()
```
