package handlers

import (
	"challenger-api/dal"
	"challenger-api/fal"
	"encoding/json"
	"fmt"
	"github.com/go-chi/chi"
	"io/ioutil"
	"net/http"
)

type Config struct {
	DAL *dal.Config
	FAL *fal.Config
}

func Init() *Config {
	handlers := &Config{
		DAL: dal.Init(),
		FAL: fal.Init(),
	}
	return handlers
}

/* Handler Helpers */

func GetURLQuery(key string, r *http.Request) (string, error) {
	value := chi.URLParam(r, key)
	if len(value) < 1 {
		return "", fmt.Errorf("Url key %s was missing\n", key)
	}
	return value, nil
}

func DecodeRequestFormText(key string, r *http.Request) (string, error) {
	value := r.FormValue(key)
	if value == "" {
		return value, fmt.Errorf("No form value found for key: %s %s\n", key, value)
	}

	return value, nil
}

func DecodeRequestFormFile(fileName string, r *http.Request) ([]byte, error) {
	err := r.ParseForm()
	if err != nil {
		return nil, err
	}

	file, header, err := r.FormFile(fileName)
	defer file.Close()
	if err != nil {
		return nil, err
	}

	bytes := make([]byte, header.Size)
	_, err = file.Read(bytes)
	if err != nil {
		return nil, err
	}

	return bytes, nil
}

func DecodeRequestBody(body interface{}, r *http.Request) error {
	buffer, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		return err
	}
	return json.Unmarshal(buffer, body)
}

func EncodeResponseBody(body interface{}, w http.ResponseWriter) error {
	w.Header().Set("Content-Type", "application/json")
	return json.NewEncoder(w).Encode(body)
}
