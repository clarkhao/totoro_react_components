# NextInput

A reusable React input component with TailwindCss and validating.

## Installation

Install the package using npm:

```bash
npm install @clarktotoro/input
```

## Setting

in tailwind.config.ts, add content

```bash
content: [
    './node_modules/@clarktotoro/**/*.{js,ts,jsx,tsx,mdx}',
  ],
```

## NextInput Usage

```bash
import React from 'react';
import {NextInput} from '@clarktotoro/input';

function App() {
  return (
    <div>
      <NextInput type="text" name="name" />
    </div>
  );
}

export default App;
```
## Validating
```bash
import React from 'react';
import {NextInput} from '@clarktotoro/input';

function App() {
  return (
    <div>
      <NextInput type="text" name="name" needVerified />
    </div>
  );
}
## 
## Props

type: 'text'|'email'|'password'|'search'
name: 'text'|'email'|'password'|'code'|'name'
needVerified?: boolean;