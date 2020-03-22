package routes

import (
	"challenger-api/handlers"
	"challenger-api/jwt_helpers"
	"context"
	"fmt"
	"github.com/go-chi/chi"
	"net/http"
)

type Config struct {
	Handlers *handlers.Config
}

func Init() *Config {
	routes := &Config{
		Handlers: handlers.Init(),
	}
	return routes
}

func (c *Config) Open() *chi.Mux {
	router := chi.NewRouter()

	router.Post("/", c.Handlers.SignUp)
	router.Put("/", c.Handlers.SignIn)

	return router
}

func (c *Config) User() *chi.Mux {
	router := chi.NewRouter()
	router.Use(VerifyToken)

	router.Post("/challenge", c.Handlers.CreateChallenge)
	router.Get("/challenge", c.Handlers.GetChallenges)
	router.Get("/challenge/{id}/{fileType}", c.Handlers.GetChallengeFile)
	router.Delete("/challenge/{id}", c.Handlers.DeleteChallenge)
	router.Get("/challenge/{id}/results", c.Handlers.GetChallengeResults)
	router.Delete("/", c.Handlers.DeleteUser)

	return router
}

/** Middlewares **/

func VerifyToken(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		token := r.Header.Get("ac-token")

		decodedToken, claims, err := jwt_helpers.DecodeToken(token)
		if err != nil {
			fmt.Printf("%v\n", err)
		}
		if !decodedToken.Valid {
			fmt.Printf("%v\n", err)
		}

		ctx := context.WithValue(r.Context(), "userID", claims.UserID)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}
