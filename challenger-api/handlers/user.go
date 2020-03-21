package handlers

import (
	"challenger-api/models"
	"fmt"
	"github.com/go-chi/render"
	"net/http"
)

func (c *Config) SignUp(w http.ResponseWriter, r *http.Request) {
	user := &models.User{
		Name:     "user",
		Email:    "user",
		Password: "user",
	}
	err := c.DAL.CreateUser(user)
	if err != nil {
		fmt.Printf("%v\n", err)
	}
	render.JSON(w, r, user)
}

func (c *Config) SignIn(w http.ResponseWriter, r *http.Request) {
	user := models.User{}
	render.JSON(w, r, user)
}

func (c *Config) DeleteUser(w http.ResponseWriter, r *http.Request) {
	response := make(map[string]string)
	render.JSON(w, r, response)
}
