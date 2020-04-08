package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	router.
		Path("/").
		Methods("POST").
		HandlerFunc(UploadFile)

	fmt.Println("Starting...")
	log.Fatal(http.ListenAndServe(":5050", router))
}

func UploadFile(w http.ResponseWriter, r *http.Request) {
	// Enable cors
	(w).Header().Set("Access-Control-Allow-Origin", "*")

	err := r.ParseForm()
	if err != nil {
		w.Write([]byte(err.Error()))
		return
	}

	file, _, err := r.FormFile("ChallengeResults.xml")
	defer file.Close()
	if err != nil {
		w.Write([]byte(err.Error()))
		return
	}

	bytes := make([]byte, 100000)
	n, err := file.Read(bytes)
	if err != nil {
		w.Write([]byte(err.Error()))
		return
	}

	fmt.Printf("%d bytes: %s\n", n, string(bytes[:n]))
}
