package routes

import (
	"github.com/go-chi/chi"
)

func (c *Config) Challenge() *chi.Mux {
	router := chi.NewRouter()
	router.Post("/", c.Handlers.CreateChallenge)
	router.Get("/", c.Handlers.GetChallenges)
	router.Get("/:id", c.Handlers.GetChallenge)
	router.Delete("/:id", c.Handlers.DeleteChallenge)
	router.Get("/:id/results", c.Handlers.GetChallengeResults)
	return router
}
