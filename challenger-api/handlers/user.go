package handlers

import (
	"challenger-api/models"
	"github.com/go-chi/render"
	"net/http"
)

func SignUp(w http.ResponseWriter, r *http.Request) {
	user := models.User{}
	render.JSON(w, r, user)
}

func SignIn(w http.ResponseWriter, r *http.Request) {
	user := models.User{}
	render.JSON(w, r, user)
}

func DeleteUser(w http.ResponseWriter, r *http.Request) {
	response := make(map[string]string)
	render.JSON(w, r, response)
}
