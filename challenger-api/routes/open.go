package routes

import (
	"github.com/go-chi/chi"
)

func (c *Config) User() *chi.Mux {
	router := chi.NewRouter()

	router.Post("/", c.Handlers.SignUp)
	router.Put("/", c.Handlers.SignIn)

	return router
}
