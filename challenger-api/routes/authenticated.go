package routes

import (
	"github.com/go-chi/chi"
)

func (c *Config) Challenge() *chi.Mux {
	router := chi.NewRouter()
	router.Use(VerifyToken)

	router.Post("/", c.Handlers.CreateChallenge)
	router.Get("/", c.Handlers.GetChallenges)
	router.Get("/{id}/{fileType}", c.Handlers.GetChallengeFile)
	router.Delete("/{id}", c.Handlers.DeleteChallenge)
	router.Get("/{id}/results", c.Handlers.GetChallengeResults)
	router.Delete("/", c.Handlers.DeleteUser)

	return router
}
