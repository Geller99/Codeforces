

const simplifyPath = (path:string) => {
    if (!path) return "/"

    const components = path.split('/');
    let stack: string[] = [];  // starts with root

    for(const component of components) {
        if(component === "" || component === ".") continue; // skip
        if(component === ".." && stack.length > 0) {
            stack.pop();
            continue;
        }
        stack.push(component);
    }

    let result = "";
    while(stack.length > 0) {
        result = "/" + stack.pop() + result;
    }
    return result;
}


/* Example -> After splitting by '/', we get these components:
["", "...", "a", "..", "b", "c", "..", "d", ".", ""]

First "" represents root
Last "" is due to trailing slash

Let's step through the stack operations:

Start with root in stack:
Stack: [""]
See "..."

Valid directory name (3+ dots)
Push it
Stack: ["", "..."]


See "a"

Regular directory
Push it
Stack: ["", "...", "a"]


See ".."

Parent directory
Pop once (removes "a")
Stack: ["", "..."]


See "b"

Regular directory
Push it
Stack: ["", "...", "b"]


See "c"

Regular directory
Push it
Stack: ["", "...", "b", "c"]


See ".."

Parent directory
Pop once (removes "c")
Stack: ["", "...", "b"]


See "d"

Regular directory
Push it
Stack: ["", "...", "b", "d"]


See "."

Current directory
Skip it
Stack: ["", "...", "b", "d"]


See "" (from trailing slash)

Empty component
Skip it
Stack: ["", "...", "b", "d"]



Final stack: ["", "...", "b", "d"]
Join with '/': "/.../b/d"

*/