package dal

import "challenger-api/models"

func (d *DAL) CreateUser(user *models.User) error {
	return d.db.Insert(user)
}

func (d *DAL) GetUserByEmailAndPassword(user *models.User) error {
	return d.db.Model(user).
		Where("email = ?email").
		Where("password = ?password").
		Select()
}

func (d *DAL) DeleteUser(user *models.User) error {
	_, err := d.db.Model(user).WherePK().Delete()
	return err
}
