package routes

import (
	"challenger-api/handlers"
	"challenger-api/jwt_helpers"
	"context"
	"fmt"
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
