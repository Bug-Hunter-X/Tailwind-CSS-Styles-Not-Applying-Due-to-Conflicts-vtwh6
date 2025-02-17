```javascript
// bugSolution.js - Potential solutions

// Solution 1: More specific class
<div className="bg-red-500 p-4 relative">
  <p>This text should be red.</p>
</div>

// Solution 2: !important (use sparingly)
<div className="bg-red-500 p-4 !important">
  <p>This text should be red.</p>
</div>

// Solution 3: Class Order Adjustment (if class conflict)
// Adjust class order to ensure specificity works correctly.
```