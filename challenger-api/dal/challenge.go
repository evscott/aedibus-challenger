package dal

import "challenger-api/models"

func (d *DAL) CreateChallenge(challenge *models.Challenge) error {
	return d.db.Insert(challenge)
}

func (d *DAL) DeleteChallenge(challenge *models.Challenge) error {
	_, err := d.db.Model(challenge).WherePK().Delete()
	return err
}

func (d *DAL) GetChallenge(challenge *models.Challenge) error {
	return d.db.Model(challenge).WherePK().Select()
}

func (d *DAL) GetChallenges() (models.Challenges, error) {
	challenges := models.Challenges{}
	return challenges, d.db.Model(challenges).Select()
}
