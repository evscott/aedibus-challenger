package routes

import (
	"challenger-api/handlers"
	"github.com/go-chi/chi"
)

func Challenge() *chi.Mux {
	router := chi.NewRouter()
	router.Post("/", handlers.CreateChallenge)
	router.Get("/", handlers.GetChallenges)
	router.Get("/:id", handlers.GetChallenge)
	router.Delete("/:id", handlers.DeleteChallenge)
	router.Get("/:id/results", handlers.GetChallengeResults)
	return router
}
