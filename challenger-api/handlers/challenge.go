package handlers

import (
	"challenger-api/fal"
	"challenger-api/models"
	"fmt"
	"github.com/go-chi/render"
	"net/http"
)

func (c *Config) CreateChallenge(w http.ResponseWriter, r *http.Request) {
	(w).Header().Set("Access-Control-Allow-Origin", "*")

	creatorID, err := DecodeRequestFormText("creatorID", r)
	if err != nil {
		fmt.Printf("%v\n", err)
	}
	challengerID, err := DecodeRequestFormText("challengerID", r)
	if err != nil {
		fmt.Printf("%v\n", err)
	}
	challenge := &models.Challenge{
		CreatorID:    creatorID,
		ChallengerID: challengerID,
	}

	readme, err := DecodeRequestFormFile("README.md", r)
	if err != nil {
		fmt.Printf("%v\n", err)
	}
	tests, err := DecodeRequestFormFile("tests.java", r)
	if err != nil {
		fmt.Printf("%v\n", err)
	}

	err = c.DAL.CreateChallenge(challenge)
	if err != nil {
		fmt.Printf("%v\n", err)
	}
	err = c.FAL.CreateFile(fal.README, challenge.ID, readme)
	if err != nil {
		fmt.Printf("%v\n", err)
	}
	err = c.FAL.CreateFile(fal.Tests, challenge.ID, tests)
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
