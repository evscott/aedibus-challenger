package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

func main() {
	router := mux.NewRouter()

	fmt.Println("Starting...")

	log.Fatal(http.ListenAndServe(":3030", router))
}
