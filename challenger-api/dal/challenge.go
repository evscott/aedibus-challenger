package dal

import "challenger-api/models"

func (d *Config) CreateChallenge(challenge *models.Challenge) error {
	return d.db.Insert(challenge)
}

func (d *Config) DeleteChallenge(challenge *models.Challenge) error {
	_, err := d.db.Model(challenge).WherePK().Delete()
	return err
}

func (d *Config) GetChallenge(challenge *models.Challenge) error {
	return d.db.Model(challenge).WherePK().Select()
}

func (d *Config) GetChallenges() (models.Challenges, error) {
	challenges := models.Challenges{}
	return challenges, d.db.Model(challenges).Select()
}
