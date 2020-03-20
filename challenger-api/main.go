package main

import (
	"code.sajari.com/storage"
	"context"
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

func main() {
	ctx := context.Background()
	router := mux.NewRouter()

	fmt.Println("Starting...")

	local := storage.Local(".")
	f, err := local.Open(ctx, "Dockerfile") // will open "/some/root/path/file.json"
	if err != nil {
		// ..
		fmt.Printf("Error %s\n", err)
	}

	p := make([]byte, f.Size)
	n, err := f.Read(p)
	if err != nil {
		fmt.Printf("Error %s\n", err)
	}

	fmt.Printf("%v %d\n", string(p), n)

	// ...
	f.Close()

	log.Fatal(http.ListenAndServe(":3030", router))
}
