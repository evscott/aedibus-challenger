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
	userID := r.Context().Value("userID").(string)

	challengerID, err := DecodeRequestFormText("challengerID", r)
	if err != nil {
		fmt.Printf("%v\n", err)
	}

	challenge := &models.Challenge{
		CreatorID:    userID,
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
	userID := r.Context().Value("userID").(string)
	challenges, err := c.DAL.GetChallenges(userID)
	if err != nil {
		fmt.Printf("%v\n", err)
	}

	render.JSON(w, r, challenges)
}

func (c *Config) GetChallengeFile(w http.ResponseWriter, r *http.Request) {
	userID := r.Context().Value("userID").(string)

	challengeID, err := GetURLQuery("id", r)
	if err != nil {
		fmt.Printf("%v\n", err)
	}

	val, err := GetURLQuery("fileType", r)
	if err != nil {
		fmt.Printf("%v\n", err)
	}

	fileType := fal.FileType(val)
	if fileType != fal.Tests || fileType != fal.README {
		fmt.Printf("Invalid file type\n")

	}

	challenge := &models.Challenge{
		ID: challengeID,
	}

	err = c.DAL.GetChallenge(challenge, userID)
	if err != nil {
		fmt.Printf("%v\n", err)
	}

	readme, err := c.FAL.GetFile(fileType, challenge.ID)
	if err != nil {
		fmt.Printf("%v\n", err)
	}

	render.Data(w, r, readme)
}

func (c *Config) DeleteChallenge(w http.ResponseWriter, r *http.Request) {
	response := make(map[string]string)
	render.JSON(w, r, response)
}

func (c *Config) GetChallengeResults(w http.ResponseWriter, r *http.Request) {
	challengeResults := models.ChallengeResults{}
	render.JSON(w, r, challengeResults)
}
