package handlers

import (
	"challenger-api/models"
	"github.com/go-chi/render"
	"net/http"
)

func CreateChallenge(w http.ResponseWriter, r *http.Request) {
	challenge := models.Challenge{}
	render.JSON(w, r, challenge)
}

func GetChallenges(w http.ResponseWriter, r *http.Request) {
	response := make(map[string]string)
	render.JSON(w, r, response)
}

func GetChallenge(w http.ResponseWriter, r *http.Request) {
	challenge := models.Challenge{}
	render.JSON(w, r, challenge)
}

func DeleteChallenge(w http.ResponseWriter, r *http.Request) {
	response := make(map[string]string)
	render.JSON(w, r, response)
}

func GetChallengeResults(w http.ResponseWriter, r *http.Request) {
	challengeResults := models.ChallengeResults{}
	render.JSON(w, r, challengeResults)
}
