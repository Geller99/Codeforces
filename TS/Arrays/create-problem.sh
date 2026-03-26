#!/bin/bash

# Usage: ./create_problem.sh "problem-name"

PROBLEM_NAME=$1

if [ -z "$PROBLEM_NAME" ]; then
  echo "Please provide a problem name."
  exit 1
fi


# Create index.ts
cat <<EOL > "index.ts"
// $PROBLEM_NAME

function solution() {
    
}
EOL

# Create reflection.md
cat <<EOL > "reflection.md"
## $PROBLEM_NAME

### Pattern

---

### Core Insight

---

### What I Learned

---

### Complexity
- Time:
- Space:
EOL

echo "Created $DIR_PATH with index.ts and reflection.md"