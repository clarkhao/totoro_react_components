package main

import (
	"fmt"
	"log"
	"os"
	"path/filepath"

	"github.com/clarkhao/go-func/clean"
	"github.com/clarkhao/go-func/cp"
)

func main() {
	//list the dir of sb-src and sb-dist
	currentPath, err := os.Getwd()
	if err != nil {
		log.Panicln("failed to get current path")
	}
	fmt.Printf("current dir is: %s\n", currentPath)
	sbSrc := filepath.Join(currentPath, "/storybook-static")
	fmt.Printf("storybook src dir is: %s\n", sbSrc)
	sbDest := filepath.Join(sbSrc, "../../../aws-cdk-ts/frontend/sb")
	fmt.Printf("storybook dest dir is: %s\n", sbDest)
	//select all files and dir inside sb-src and copied to sb-dest dir
	isSrcExisted, err := clean.DirExist(sbSrc)
	if err != nil {
		log.Panicln("failed to determine if dest dir existed")
	}
	if isSrcExisted {
		err = cp.CopyDir(sbSrc, sbDest)
		if err != nil {
			log.Panicln("failed to copy dir")
		}
	} else {
		fmt.Println("please create sb dir first")
	}

}
