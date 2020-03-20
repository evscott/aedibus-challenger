package routes

import (
	"challenger-api/handlers"
	"github.com/go-chi/chi"
)

func User() *chi.Mux {
	router := chi.NewRouter()
	router.Post("/", handlers.SignUp)
	router.Put("/", handlers.SignIn)
	router.Delete("/", handlers.DeleteUser)
	return router
}
