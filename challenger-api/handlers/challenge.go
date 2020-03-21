package handlers

import (
	"challenger-api/fal"
	"challenger-api/models"
	"fmt"
	"github.com/go-chi/render"
	"net/http"
)

func (c *Config) CreateChallenge(w http.ResponseWriter, r *http.Request) {
	challenge := &models.Challenge{}
	err := c.DAL.CreateChallenge(challenge)
	if err != nil {
		fmt.Printf("%v\n", err)
	}

	err = fal.CreateFile(fal.Instructions, "blah.txt", []byte("bananas"))
	if err != nil {
		fmt.Printf("%v\n", err)
	}

	render.JSON(w, r, challenge)
}

func (c *Config) GetChallenges(w http.ResponseWriter, r *http.Request) {
	response := make(map[string]string)
	render.JSON(w, r, response)
}

func (c *Config) GetChallenge(w http.ResponseWriter, r *http.Request) {
	challenge := models.Challenge{}
	render.JSON(w, r, challenge)
}

func (c *Config) DeleteChallenge(w http.ResponseWriter, r *http.Request) {
	response := make(map[string]string)
	render.JSON(w, r, response)
}

func (c *Config) GetChallengeResults(w http.ResponseWriter, r *http.Request) {
	challengeResults := models.ChallengeResults{}
	render.JSON(w, r, challengeResults)
}
