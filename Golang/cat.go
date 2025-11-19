package main

import (
	"fmt"
	"io"
	"os"
)

/*
@cat takes a file path as an argument and prints the content of that file to the console

read each file specified on the command line
read it into memory
copy that memory to standard output

usage: cat <file1> <file2> ...
*/

func cat () {
	for _, file := range os.Args[1:] {  // for each file specified via cli args
		f, err := os.Open(file)  // open the file 
		if err != nil {
			fmt.Fprintf(os.Stderr, "open %s: %v", file, err)  // print to standard error if error isn't nil
			os.Exit(1)  // exit with error
		}

		defer f.Close() // ensure file is properly closed even if cat exits/returns
		b, err := io.ReadAll(f)  // read the file into memory 
		if err != nil {
			fmt.Fprintf(os.Stderr, "read %s: %v", file, err)
			os.Exit(1)
		}
		os.Stdout.Write(b) // write its contents to standard output
	}

}