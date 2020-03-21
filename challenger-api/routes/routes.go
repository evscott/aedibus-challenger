package routes

import (
	"challenger-api/handlers"
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
