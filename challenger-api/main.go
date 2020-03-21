package main

import (
	"challenger-api/routes"
	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/render"
	"log"
	"net/http"
)

func Routes() *chi.Mux {
	router := chi.NewRouter()
	router.Use(
		render.SetContentType(render.ContentTypeJSON),
		middleware.Logger,
		middleware.Recoverer,
	)

	cRoutes := routes.Init()

	router.Route("/v1", func(r chi.Router) {
		r.Mount("/challenge", cRoutes.Challenge())
		r.Mount("/user", cRoutes.User())
	})

	return router
}

func printRoutes(router *chi.Mux) {
	walkFunc := func(method string, route string, handler http.Handler, middlewares ...func(http.Handler) http.Handler) error {
		log.Printf("%s %s\n", method, route)
		return nil
	}
	if err := chi.Walk(router, walkFunc); err != nil {
		log.Panicf("Logging err: %s\n", err.Error())
	}
}

func main() {
	router := Routes()
	printRoutes(router)

	log.Fatal(http.ListenAndServe(":3030", router))
}
