package handlers

import (
	"challenger-api/dal"
)

type Config struct {
	DAL *dal.DAL
}

func Init() *Config {
	handlers := &Config{
		DAL: dal.Init(),
	}
	return handlers
}
