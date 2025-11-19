package main

import (
	"fmt"
	"os"
)

/*
cli tool too create files with specific contents

@echo.go prints its arguments to standard output, separated by spaces and terminated by a new line
usage: echo <args...>
*/

func echo () {

	// iterate over command line arguments
	for i, arg := range os.Args[1:] {
		if i > 0 {
			fmt.Print(" ")
		}
		fmt.Print(arg)
	}
	fmt.Println()
}