package models

type User struct {
	UID      string `json:"uid",pg:"uid"`
	Name     string `json:"name",pg:"name"`
	Email    string `json:"email",pg:"email"`
	Password string `json:"password",pg:"password"`
}
