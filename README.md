# Create library using react

- This template provides a minimal setup to create a library in React using Vite.
- This uses styledcomponents for styling
- It uses javascript. Typescript also can be configured easily by adding relevant libraries.

## Publishing the library

Publish the library using the below command
```bash
  npm run publish:lib
```

## Installation

Once you have published the repo to npm, Install react-component-library-vite with npm. Feel free to change the name in package.json.

```bash
  npm install react-component-library-vite
```

## Usage/Examples

Example 1:

```javascript
import { Button} from 'react-component-library-vite/components';

<Button>Primary</Button>
```

Example 2: Assume we are having common styles which should be applied to any application that uses this library, we can export a css and use that in our project as below. 
I have a customstyles.css file in my library, which I am importing in my project as: 

```javascript
import 'react-component-library-vite/customstyles.css'
```


## Test cases

You can run test cases with the below command

```bash
  npm run test
```

## Storybook

Basic storybook setup is also present and it can be run using below command

```bash
  npm run storybook
```

