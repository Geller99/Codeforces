package main

import (
	"fmt"
	"os"
)

// cli tool that finds the offset of the first occurrence of a string in a file and prints it to stdout

func main () {

	// parse cli arguments
	// os.Args[0] is the name of the program and the rest are actual arguments

	if len(os.Args) != 3 {
		fmt.Fprintf(os.Stderr, "Usage: findoffset <filename> <string>")
		os.Exit(1);
	}

	filepath, pattern := os.Args[1], os.Args[2]

	// Next, we read the file into memory
	fileContent, err := os.ReadFile(filepath)
	if err != nil {
		fmt.Fprintf(os.Stderr, "read %s: %v", filepath, err)
		os.Exit(1)
	}

	// Next, we compare the bytes in the file to the bytes of our string
	for i :=0; i < len(fileContent)- len(pattern); i++ {
		for j:= range pattern {
			if fileContent[i+j] != pattern[j] {
				break
			}

			if j == len(pattern) - 1 {
				fmt.Fprintf(os.Stdout, "%d\n", i)
				os.Exit(0)
			}
		}
	}

	os.Exit(0)
}