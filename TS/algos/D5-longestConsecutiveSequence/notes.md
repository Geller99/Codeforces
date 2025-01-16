

## Patterns

- Hash set for O(1) lookups
- Local vs global max
- Sequence building/counting 

The key is to add all values into a set,
Check if a value starts a sequence (meaning the set does not contain any value 1 less than it)
then we count every other value in that sequence
and update the global max with the longest sequence

