package models

type Challenge struct {
	ID           string `pg:"id"`
	ChallengerID string `pg:"challenger_id"`
	CreatorID    string `pg:"creator_id"`
}

type Challenges []Challenge

type ChallengeResults struct {
	ChallengeID string `pg:"challenge_id"`
	TestsRan    string `pg:"tests_ran"`
	TestsPassed string `pg:"tests_passed"`
}

type GetChallengeRes struct {
	ID           string `json:"id"`
	ChallengerID string `json:"challengerID"`
	CreatorID    string `json:"creatorID"`
	Tests        []byte `json:"tests"`
	README       []byte `json:"readme"`
}
